import React, { useState, useEffect } from "react";
import axios from 'axios'
import xml2json from 'xml2js'

const CURRENTLY_READING = process.env.REACT_APP_CURRENTLY_READING

function BookInfo(number) {
  const [jsonData, setData] = useState();

   function fetchData() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/107058193.xml?key=${CURRENTLY_READING}&v=2?shelf=currently-reading`)
    .then(response =>{
      let data;
      xml2json.parseString(response.data, function (err, result) {
        data = result.GoodreadsResponse.reviews[0].review
      });
      setData(data);
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

    return(
      <div>
      <b>currently reading</b>
        <p><span><a href={`https://www.amazon.com/s?k=${jsonData && jsonData[0].book[0].title}`} >{(jsonData && jsonData[0].book[0].title)}</a></span></p>
      </div>
    )
  }

export default BookInfo;