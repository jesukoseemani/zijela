import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDmaQ8nGbJVGu815Oa3Di8m1fvPkuyTDvY',
	authDomain: 'zijela-7d447.firebaseapp.com',
	databaseURL: 'https://zijela-7d447-default-rtdb.firebaseio.com',
	projectId: 'zijela-7d447',
	storageBucket: 'zijela-7d447.appspot.com',
	messagingSenderId: '1092965548487',
	appId: '1:1092965548487:web:a080bd04976861614a99e2',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
