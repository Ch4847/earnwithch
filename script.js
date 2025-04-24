
const nftList = document.getElementById("nft-list");

const nfts = [
    { name: "Crypto Chimp", price: 5000, demand: "High" },
    { name: "PakArt NFT", price: 3000, demand: "Medium" },
    { name: "Urban Tiger", price: 1500, demand: "Low" }
];

nfts.forEach(nft => {
    const div = document.createElement("div");
    div.className = "nft-item";
    div.innerHTML = `<h3>${nft.name}</h3><p>Price: PKR ${nft.price}</p><p>Demand: ${nft.demand}</p>`;
    nftList.appendChild(div);
});
