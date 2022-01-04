
export default function PostingDetails(){
    return(
        <div>
            <h3>posting details</h3>
                    <p>make / manufacturer</p>
                    <input></input>
                    <p>model name / number</p>
                    <input></input>
                    <p>size / dimensions</p>
                    <input type="text" placeholder="length x width x height"></input>
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
                        <input type="checkbox" />
                         cryptocurrency ok
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" />
                         delivery available
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" />
                         include "reviews by this user" on bottom
                    </label>
        </div>
    )
}