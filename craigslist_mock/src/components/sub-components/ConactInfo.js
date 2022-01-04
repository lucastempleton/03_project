
export default function ContactInfo(){
    
    return (
        <div>
            <p>email</p>
            <input type="text" placeholder="Your email address" />
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
                <input type="text" />
                <p>extension</p>
                <input type="text" ></input>
                <p>contact name</p>
                <input type="text"></input>
            </div>
        </div>
    )
}