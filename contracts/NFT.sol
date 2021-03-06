// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract NFT is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private nftTokenId;


    address contractAddress;

    constructor(address marketplaceAddress)ERC721("boston music","music nft"){

        contractAddress = 0xeA88c23E9a2A428eCAf56785F418d373C42E48ca;

    }

    function createNFtToken(string memory nftTokenURl)public  returns (uint256){
        nftTokenId.increment();
        uint256 id = nftTokenId.current();
        _mint(msg.sender,id);

        _setTokenURI(id,nftTokenURl);
   
        setApprovalForAll  (contractAddress,true);
    

        return id;
    
    }



}