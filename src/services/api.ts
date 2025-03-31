import { query, where } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from 'src/services/firebase';
import type { Dish } from 'src/types/data-contracts';

class Api {
  private collectionName = 'dishes';

  async getPlate(id: string) {
    const db = getFirestore(firebaseApp);
    const platesCol = collection(db, this.collectionName);
    const q = query(platesCol, where('id', '==', id));
    const platesSnapshot = await getDocs(q);

    if (platesSnapshot.empty) {
      return null;
    }

    const dish = platesSnapshot.docs[0].data();
    return dish as Dish;
  }

  async getPlates() {
    const db = getFirestore(firebaseApp);
    const platesCol = collection(db, this.collectionName);
    const platesSnapshot = await getDocs(platesCol);
    const platesList = platesSnapshot.docs.map(doc => doc.data() as Dish);
    return platesList.sort((a, b) => +a.id - +b.id);
  }
}

export const api = new Api();
