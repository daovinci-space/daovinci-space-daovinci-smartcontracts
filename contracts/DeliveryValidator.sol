// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DeliveryValidator {
    event DeliveryConfirmed(address artist, address merchant, string item, uint256 timestamp);

    struct Delivery {
        address artist;
        address merchant;
        string item;
        uint256 timestamp;
    }

    Delivery[] public deliveries;

    function confirmDelivery(address artist, string memory item) public {
        deliveries.push(Delivery({
            artist: artist,
            merchant: msg.sender,
            item: item,
            timestamp: block.timestamp
        }));

        emit DeliveryConfirmed(artist, msg.sender, item, block.timestamp);
    }

    function getTotalDeliveries() public view returns (uint256) {
        return deliveries.length;
    }
}