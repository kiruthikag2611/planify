'use client';

import {
  collection,
  onSnapshot,
  query,
  where,
  Query,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
} from 'firebase/firestore';
import { useEffect, useState, useMemo } from 'react';
import { useFirestore } from '../provider';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

interface UseCollectionOptions<T> {
  query?: (ref: ReturnType<typeof collection>) => Query;
  initialData?: T[];
}

export function useCollection<T>(
  pathOrQuery: string | Query | null,
  options?: UseCollectionOptions<T>
) {
  const firestore = useFirestore();
  const [data, setData] = useState<T[] | null>(options?.initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);
  
  const memoizedQuery = useMemo(() => {
    if (!pathOrQuery || !firestore) return null;
    if (typeof pathOrQuery === 'string') {
        const ref = collection(firestore, pathOrQuery);
        return options?.query ? options.query(ref) : ref;
    }
    return pathOrQuery;
  }, [pathOrQuery, firestore, options]);

  useEffect(() => {
    if (!memoizedQuery) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      memoizedQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const result: T[] = [];
        snapshot.forEach((doc) => {
          result.push({ eventId: doc.id, ...doc.data() } as T);
        });
        setData(result);
        setLoading(false);
        setError(null);
      },
      (err: FirestoreError) => {
        const permissionError = new FirestorePermissionError({
          path: 'path' in memoizedQuery ? memoizedQuery.path : 'unknown',
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);

        setError(err);
        setLoading(false);
        console.error(`Error fetching collection: ${err.message}`);
      }
    );

    return () => unsubscribe();
  }, [memoizedQuery]);

  return { data, loading, error };
}
