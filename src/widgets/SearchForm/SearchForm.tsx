import SelectCityOrCountry from "../../shared/ui/SelectCityOrCountry/SelectCityOrCountry";
import Button from "../../shared/ui/Button/Button";
import Selector from "../../shared/ui/Selector/Selector";
import {currencies, months} from "../../shared/ui/Selector/constants";

export default function SearchForm() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form inputs
    const data = {
      currency: event.target.currency.value,
      month: event.target.month.value,
      origin: event.target.origin.value,
      destination: event.target.destination.value,
    };

    // Send the data to the server in JSON format
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data
    const endpoint = '/api/flights';

    // Form the request for sending data to the server
    const options = {
      // The method is POST because we are sending data
      method: 'POST',
      // Tell the server we're sending JSON
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above
      body: JSONdata,
    };

    // Send the form data to our API and get a response
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON
    const result = await response.json();

    // Update something on the current page based on received data
    alert(`Data: ${JSON.stringify(result.data)}`);
  }

  return (
      <form onSubmit={handleSubmit}>
        <Selector name="currency" options={currencies}/>
        <Selector name="month" options={months}/>
        <SelectCityOrCountry name="origin" defaultValue="LED"/>
        <SelectCityOrCountry name="destination" defaultValue="HKT"/>
        <Button text="Search"/>
      </form>
  );
}