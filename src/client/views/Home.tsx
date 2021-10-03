import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout'
import { useForm } from '../hooks/useForm'
import { apiService } from '../utils/api-service';

const Home = () => {
    const history = useHistory();
    const { values, handleChanges, clear } = useForm();
    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data));
    }, []);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!values.title || !values.author || !values.price || !values.categoryid){
            alert('Please fill out all required fields');
            return;
        }
        apiService('/api/books', 'POST', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid})
            .then(data => {
                history.push('/books');
            })
    }
    return (
        <RootLayout>
            <form className="form-group">
                <label>Title</label>
                <input 
                value={values.title || ''}
                onChange={handleChanges}
                name="title"
                type="text" 
                className="form-control" />
                <label>Author</label>
                <input 
                value={values.author || ''}
                onChange={handleChanges}
                name="author"
                type="text" 
                className="form-control" />
                <label>Price</label>
                <input 
                value={values.price || ''}
                onChange={handleChanges}
                name="price"
                type="number" 
                step=".01"
                className="form-control" />
                <select name="categoryid" onChange={handleChanges}>
                    <option value="0">Choose Genre</option>
                    {categories.map((values) => (
                        <option value={values.id} key={values.id}>
                            {values.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </RootLayout>
    )
}

export default Home
