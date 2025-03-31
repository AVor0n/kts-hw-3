import { doc } from 'firebase/firestore';
import { getDoc, getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from 'src/services/firebase';
import type { Dish } from 'src/types/data-contracts';

class Api {
  private collectionName = 'dishes';

  async getPlate(id: string) {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, this.collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as Dish;
    }
    return null;
  }

  async getPlates() {
    const db = getFirestore(firebaseApp);
    const platesCol = collection(db, this.collectionName);
    const platesSnapshot = await getDocs(platesCol);
    const platesList = platesSnapshot.docs.map(doc => doc.data() as Dish);
    return platesList;
  }
}

export const api = new Api();
