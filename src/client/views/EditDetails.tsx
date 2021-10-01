import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';

const EditDetails = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const { values, handleChanges, populate } = useForm();
    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(values => {
                populate(values);
            })
    }, [])
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data));
    }, []);
    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books/${id}/edit`, 'PUT', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid})
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
                <button onClick={handleEdit} className="btn btn-primary">Submit</button>
            </form>
        </RootLayout>
    )
}

export default EditDetails;
