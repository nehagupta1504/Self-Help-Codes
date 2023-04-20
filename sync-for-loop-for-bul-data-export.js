const uploadData = async (data)=>{
  //API's to post, put data
}
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        console.log('processing record - ', index);
        await callback(array[index]);
    }
}

asyncForEach(data, async (order) => {
    // call the function to export data
    await uploadData()
});
