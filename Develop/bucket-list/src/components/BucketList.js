import React, { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";

function BucketList() {
  // bucket = []
  // setBucket is the method we want to update to update bucket
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // item = to what was passed as an argument to the function call
    // TODO: Write logic to add the new bucket item to the bucket state variable
    // what is my current state var for bucket
    const bucketItems = [item, ...bucket];

    // update state variable of bucket by calling setBucket
    setBucket(bucketItems);
    console.log(bucket);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {
      // TODO: Write logic that marks an item as complete or incomplete when invoked
      if (item.id === id) {
        // how do  determine if a item is complete or not
      }
    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // remove from the bucket state variable the item that = id that was passed
    // use filter array method that do not = the id of what was removed
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function
    // TODO: Update the bucket state variable
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />

      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </>
  );
}

export default BucketList;
