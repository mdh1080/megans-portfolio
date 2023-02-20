function Contact(){
    return (
        <div>
            <h2>
              Contact Form
            </h2>
<div className="container">
  <form action="/action_page.php">
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    <label htmlFor="country">Email</label>
    <input type="text" id="lname" email="lastname" placeholder="Your email address.." />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>

        </div>
    )
}

export default Contact;