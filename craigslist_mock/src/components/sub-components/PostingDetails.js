
export default function PostingDetails({ newDetails, handlePost}){
    return(
        <div>
            <h3>posting details</h3>
                    <p>make / manufacturer</p>
                    <input type="text" name="make" onChange={(e) => handlePost(e)} value={newDetails.make}></input>
                    <p>model name / number</p>
                    <input type="text" name="model" onChange={(e) => handlePost(e)} value={newDetails.model}></input>
                    <p>size / dimensions</p>
                    <input type="text" placeholder="length x width x height" name="size" onChange={(e) => handlePost(e)} value={newDetails.size}></input>
                    <p>condition</p>
                    <select>
                        <option>-</option>
                        <option>new</option>
                        <option>like new</option>
                        <option>execellent</option>
                        <option>good</option>
                        <option>fair</option>
                        <option>salvage</option>
                    </select>
                    <p>language of posting</p>
                    <select>
                        <option>english</option>
                    </select>
                    <br/>
                    <label>
                        <input onClick={(e)=>handlePost(e)} type="checkbox" name="cryptocurrency" value={!newDetails.cryptocurrency} />
                         cryptocurrency ok
                    </label>
                    <br/>
                    <label>
                        <input onClick={(e)=>handlePost(e)} type="checkbox" name="delivery" value={!newDetails.delivery} />
                         delivery available
                    </label>
                    <br/>
                    <label>
                        <input onClick={(e)=>handlePost(e)} type="checkbox" name="reviewDisplay" value={!newDetails.reviewDisplay} />
                         include "reviews by this user" on bottom
                    </label>
        </div>
    )
}