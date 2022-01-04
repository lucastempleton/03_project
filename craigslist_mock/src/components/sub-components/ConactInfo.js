
export default function ContactInfo({newPost, handleContact, handlePhone}){
    
    return (
        <div>
            <p>email</p>
            <input type="text" placeholder="Your email address" name="email" 
            onChange={(e) => handleContact(e)} 
            value={newPost.contact_info.email}></input>
            <div>
                <p>phone/text</p>
                    <label>
                        <input type="checkbox" />
                         show my phone number
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" />
                         phone calls OK
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" />
                         text/sms OK
                    </label>
                <p>phone number</p>
                <input type="text" 
                name="number" 
                onChange={(e) => handlePhone(e)} 
                value={newPost.contact_info.phoneNumber.number}>
                    
                </input>
                <p>extension</p>
                <input type="text" name="extension" onChange={(e) => handlePhone(e)} value={newPost.contact_info.phoneNumber.extension}></input>
                <p>contact name</p>
                <input type="text" name="name" onChange={(e) => handlePhone(e)} value={newPost.contact_info.phoneNumber.name}></input>
            </div>
        </div>
    )
}