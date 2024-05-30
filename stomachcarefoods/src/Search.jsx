import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';



// Register the icon
addIcons({
    'search-outline': searchOutline,
});
const search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(true); // Assuming the search is initially open

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Search submitted:', searchQuery);
        // Add your search logic here
    };

    const handleSearchClose = () => {
        setIsSearchOpen(false);
    };

    return (
        <div className="search-container" data-search-container style={{ display: isSearchOpen ? 'block' : 'none' }}>
            <form className="search-box" onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    name="search"
                    aria-label="Search here"
                    placeholder="Type keywords here..."
                    className="search-input"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-submit" aria-label="Submit search" data-search-submit-btn>
                    <IonIcon icon="search-outline" className='custom-icon' />
                </button>
            </form>
            <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn onClick={handleSearchClose}>
                ×
            </button>
        </div>
    );
};

export default search;