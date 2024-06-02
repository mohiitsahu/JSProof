//here we are creating list to store all NFTs
let nftCollection = [];

/* This function will take in some values as parameters, we create an
NFT object using the parameters passed to it for its metadata, 
and we will store it in the variable 'nftCollections'.*/

function mintNFT(name, category, year, description) {
    // Create an object to hold the metadata for the NFT
    let nft = {
        name: name,
        category: category,
        year: year,
        description: description
    };
    // Store the NFT in the list
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Name: " + nftCollection[i].name);
        console.log("category: " + nftCollection[i].category);
        console.log("Year: " + nftCollection[i].year);
        console.log("Description: " + nftCollection[i].description);
        console.log("---------------");
    }
}


// this is the fuction where we created variable which hold a number of NFT's
function getTotalSupply() {
    let nftcount=nftCollection.length;
    console.log("Total Supply: " + nftcount);
}

// here I am creating nfts by calling function 
mintNFT("Carl 'CJ' Johnson", "Character", 2004, "The main protagonist of GTA San Andreas.");
mintNFT("Super GT", "Vehicle", 2004, "A high-speed sports car.");
mintNFT("Grove Street", "Location", 2004, "The home base of the Grove Street Families gang.");
mintNFT("Jetpack", "Item", 2004, "A unique item that allows CJ to fly.");
mintNFT("Drive-By", "Mission", 2004, "A mission where CJ and his gang take out rivals in a drive-by shooting.");

listNFTs();

getTotalSupply();
