import { Button, UserIcon } from 'src/components';
import './App.css';
import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

function App() {
  // const [plate, setPlate] = useState<unknown>(null);
  // const [plates, setPlates] = useState<unknown[]>([]);

  // useEffect(() => {
  // async function getPlate(id: string) {
  //   const db = getFirestore(firebaseApp);
  //   const docRef = doc(db, 'food', id);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log('Document data:', docSnap.data());
  //   } else {
  //     console.log('No such document!');
  //   }
  //   return docSnap.data();
  // }

  // async function getPlates() {
  //   const db = getFirestore(firebaseApp);
  //   const platesCol = collection(db, 'food');
  //   const platesSnapshot = await getDocs(platesCol);
  //   const platesList = platesSnapshot.docs.map(doc => doc.data());
  //   console.log('PlatesList: ', platesList);
  //   return platesList;
  // }

  //   getPlates().then(plates => setPlates(plates));
  //   getPlate('1').then(plate => setPlate(plate));
  // }, []);

  return (
    <div>
      <Button>Click me 1</Button>
    </div>
  );
}

export default App;
