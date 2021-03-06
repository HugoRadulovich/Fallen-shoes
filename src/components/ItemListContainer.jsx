import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {collection, getDocs } from 'firebase/firestore';
import { query,where} from '@firebase/firestore'; 
import db from '../utils/firebaseConfig';

const ItemListContainer = () => {
    
    const [dato, setDato] = useState({});
    const { idCategory } = useParams();
    console.log(idCategory)

    useEffect(() => {
      const fetchFromFirestore = async () => {
        let q
        if (idCategory == undefined) {
            q = query(collection(db, "products"));
        }else if (idCategory == 9){
            q = query(collection(db, "products"), where('genero', '==', 'Female'))

        }else{
            q = query(collection(db, "products"), where('genero', '==', 'Male'))
        }
          const querySnapshot = await getDocs(q);
          const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
          }));
          return dataFromFirestore;
      }
      fetchFromFirestore()
      .then(result => setDato(result))
      .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDato([]);
        })
    }, []);

    return(
        <>
            
            <ItemList products={dato}/>
            
            

        </>

    )
}
export default ItemListContainer;

