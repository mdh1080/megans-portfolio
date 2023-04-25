function Contact(){
    return (
        <div>
            <h2>
              Contact Form
            </h2>
<div className="container">
  <form action="/action_page.php">
    <label htmlFor="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label htmlFor="country">Email</label>
    <input type="text" id="lname" email="email" placeholder="Your email address.." />
    <label htmlFor="message">Message</label>
    <textarea id="subject" name="subject" placeholder="Message.." defaultValue={""} />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>

        </div>
    )
}

export default Contact;