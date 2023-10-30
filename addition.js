//sort data is stored in new file 
//another mentod of sorting by zip
function sort_by_zip() {
    const filename = 'data.json';
    const data = fs.readFileSync(filename);
    const jsonData = JSON.parse(data);

    // Sort by ZIP code
    const sortByZIP = jsonData.slice().sort((a, b) => a.zip - b.zip);

    // Write the sorted data to a new file
    fs.writeFileSync('sorted_data.json', JSON.stringify(sortByZIP));

    // Read the sorted data from the new file
    const updatedfile = fs.readFileSync('sorted_data.json');
    const sortedAddressBook = JSON.parse(updatedfile);

    console.log("Sorted Address Book by ZIP Code:");
    console.log(sortedAddressBook);
}

function sort_by_zip() {
    const filename = 'data.json';
    const data = fs.readFileSync(filename);
    const jsonData = JSON.parse(data);

    // Sort by ZIP code
    const sortedData = jsonData.slice().sort((a, b) => a.zip - b.zip);

    // Write the sorted data back to the same file
    fs.writeFileSync(filename, JSON.stringify(sortedData));

    console.log("Sorted Address Book by ZIP Code:");
    console.log(sortedData);
}
