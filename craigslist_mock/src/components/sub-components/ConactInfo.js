
export default function ContactInfo({ handleContact, handlePhone, newPhone, newContact}){
    
    return (
        <div>
            <p>email</p>
            <input type="text" placeholder="Your email address" name="email" 
            onChange={(e) => handleContact(e)} 
            value={newContact.email}></input>
            <div>
                <p>phone/text</p>
                    <label>
                        <input onClick={(e)=>handlePhone(e)} type="checkbox" name="showNumber" value={!newPhone.showNumber} />
                         show my phone number
                    </label>
                    <br/>
                    <label>
                        <input onClick={(e)=>handlePhone(e)} type="checkbox" name="canCall" value={!newPhone.canCall} />
                         phone calls OK
                    </label>
                    <br/>
                    <label>
                        <input onClick={(e)=>handlePhone(e)} type="checkbox" name="canText" value={!newPhone.canText} />
                         text/sms OK
                    </label>
                <p>phone number</p>
                <input type="text" 
                name="number" 
                onChange={(e) => handlePhone(e)} 
                value={newPhone.number}>
                    
                </input>
                <p>extension</p>
                <input type="text" name="extension" onChange={(e) => handlePhone(e)} value={newPhone.extension}></input>
                <p>contact name</p>
                <input type="text" name="name" onChange={(e) => handlePhone(e)} value={newPhone.name}></input>
            </div>
        </div>
    )
}