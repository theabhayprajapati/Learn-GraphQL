import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const QUERY_ALL_USERS = gql`
    query getallusers {
      users {
        id
        name
        email
        age
    }
}


`
const QUERY_ALL_MOVIES = gql`
    query allmovies {
        movies {
          id
          name
          isCinema
          name
          yearOfPublication
  }
}
`

const QUERY_MOVIE_WITH_NAME = gql`
    query getmovie($name: String!) {
        movie(name: $name) {
            id
            name
            isCinema
            yearOfPublication
        }
    }

`
const CREATE_USER = gql`
    mutation createUser($input: createUserInput!) {
        createUser(input: $input) {
            id
            name
            email
            age
        }
    }
`

const DisplayData = () => {

    const [createuser, setcreateuser] = useState(
        {
            name: '',
            email: '',
            age: ''
        }
    )
    console.log('createuser', createuser)
    // add data to with useMutation hook
    const [createUser, { data }] = useMutation(CREATE_USER, {
        update(cache, { data: { createUser } }) {
            const { users } = cache.readQuery({ query: QUERY_ALL_USERS })
            cache.writeQuery({
                query: QUERY_ALL_USERS,
                data: { users: users.concat([createUser]) }
            })
        }
    })
    // useLazyQuery(QUERY_ALL_USERS) to fetch data 
    const [fetchmovie, { data: movieData, loading: movieLoading, error: movieError }] = useLazyQuery(QUERY_MOVIE_WITH_NAME)

    console.log(movieData);
    const { data: data2, error: error2, loading: loading2 } = useQuery(
        QUERY_ALL_MOVIES
    )
    console.log('data2', data2)


    return (
        <div className='font-mono text-4xl max-w-7xl mx-auto m-5'>
            <h1>Display Data</h1>
            <hr />
            {/* map data2 */}
            <h1>
                Movies 📺
            </h1>
            {
                data2 && data2.movies.map(movie => {
                    return (
                        <div key={movie.id} className='text-3xl grid grid-cols-1 gap-4'>
                            <h1>{movie.name}</h1>
                            <h1>{movie.isCinema}</h1>
                            <h1>{movie.yearOfPublication}</h1>
                        </div>
                    )
                })
            }
            <hr />
            {/* create users */}
            <h1>
                Users 🙋‍♂️
            </h1>
            {/* make input feild to take  name, email, age */}
            <div className='flex gap-2'>
                <input type='text' className='border-2 rounded-lg h-10  ' name='name' placeholder='name' onChange={(e) => setcreateuser({ ...createuser, name: e.target.value })} />
                <input type='text' className='border-2 rounded-lg h-10 ' placeholder='email' onChange={(e) => setcreateuser({
                    ...createuser, email
                        : e.target.value
                })} />
                <input type='number' className='border-2 rounded-lg h-10 ' placeholder='age' onChange={(e) => setcreateuser({ ...createuser, age: e.target.value })} />
                <button>
                    Create User
                </button>
            </div>
        </div>
    )
}

export default DisplayData