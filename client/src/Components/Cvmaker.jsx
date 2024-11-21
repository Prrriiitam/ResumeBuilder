import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Cvmaker = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   education: '',
  //   experience: '',
  //   skills: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can add logic here to handle form submission, e.g., send data to a server
  //   console.log('Form submitted:', formData);
  // };

  return (
    <>
     <div className='container'>
     <div className='formcontainer'>
     <h1 className='text-white'>Create Resume</h1>
      <div className='formbox'>
      <h1  className='text-white'><AccountBoxIcon />Personal Information</h1>
      <form>
      <div className="form-row">
      <div className="form-group col-md-6">
      <label for="inputName4">Full Name</label>
      <input type="text" className="form-control" id="name" placeholder="Your Full Name" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputNumber4">Phone Numeber</label>
      <input type="number" className="form-control" id="phone" placeholder="Your Phone Numebr" />
    </div>

    <div className="form-group col-md-6">
      <label for="inputGender">Gender</label>
      <select id="inputGender" className="form-control">
        <option selected>Choose...</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
    </div>

    <div className="form-group col-md-6">
      <label for="dob">Date of Birth</label>
      <input type="date" className="form-control" id="dob" name="dob" />
    </div>

    <div className="form-group col-md-6">
      <label for="inputHobbies">Your Hobbies</label>
      <input type="text" className="form-control" id="hobbies" placeholder="Enter Your Hobbies" />
    </div>

      <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>

    <div className="form-group col-md-6">
      <label for="inputEmail4">Languages</label>
      <input type="languages" className="form-control" id="languages" placeholder="Enter Languages Known" />
    </div>

    <div className="form-group col-md-6">
      <label for="inputName4">Full Address</label>
      <input type="text" className="form-control" id="address" placeholder="Your Full Address" />
    </div>
   
  </div>
  
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-6">
  <label htmlFor="inputState">State</label>
  <select id="inputState" className="form-control">
    <option defaultValue>Choose...</option>
    <option>Andaman and Nicobar Islands</option>
    <option>Andhra Pradesh</option>
    <option>Arunachal Pradesh</option>
    <option>Assam</option>
    <option>Bihar</option>
    <option>Chandigarh</option>
    <option>Chhattisgarh</option>
    <option>Dadra and Nagar Haveli and Daman and Diu</option>
    <option>Delhi</option>
    <option>Goa</option>
    <option>Gujarat</option>
    <option>Haryana</option>
    <option>Himachal Pradesh</option>
    <option>Jharkhand</option>
    <option>Karnataka</option>
    <option>Kerala</option>
    <option>Lakshadweep</option>
    <option>Madhya Pradesh</option>
    <option>Maharashtra</option>
    <option>Manipur</option>
    <option>Meghalaya</option>
    <option>Mizoram</option>
    <option>Nagaland</option>
    <option>Odisha</option>
    <option>Puducherry</option>
    <option>Punjab</option>
    <option>Rajasthan</option>
    <option>Sikkim</option>
    <option>Tamil Nadu</option>
    <option>Telangana</option>
    <option>Tripura</option>
    <option>Uttar Pradesh</option>
    <option>Uttarakhand</option>
    <option>West Bengal</option>
  </select>
</div>

    <div className="form-group col-md-2">
      <label for="inputZip">Zip Code</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="mt-4  btn btn-danger">Sign in</button>
</form>

      </div>
</div>
</div>
    </>
  );
};

export default Cvmaker;
