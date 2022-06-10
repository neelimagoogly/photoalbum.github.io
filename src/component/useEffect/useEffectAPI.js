import { getSuggestedQuery } from '@testing-library/react'
import React,{useState,useEffect} from 'react'


const UseEffectAPI
 = () => { 
  const [users,setUsers] = useState([]);   
  const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      
      setUsers(await response.json());
      
      
  }   
  useEffect(() => {
      getUsers();
  },[]);   
  return (
    <>
        <h2>Photo Album</h2>
        <div className='container-fluid mt-5'>
            <div className='row text-center'>
            {
                users.map((curElem) => {
                    return (
                        <div className='col-10 col-md-4 mt-5'>
                    <div class='car p-2'>
                        <div class='d-flex align-items-center'>
                            <div class="image"><img src={curElem.thumbnailUrl} class='rounded' width='155'/></div>
                            <div class="ml-3 w-100">
                                <h4 class='mb-0 mt-0 textLeft'><label for="exampleInputEmail1">Enter Photo name</label>
    <input type="photo name" class="form-control" id="exampleInputEmail1" placeholder="Photo name"></input></h4><span className='textLeft'>{curElem.url}</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })
            }    
                
                
                
                
            </div>

        </div>
        
    </>
  )
}

export default UseEffectAPI
