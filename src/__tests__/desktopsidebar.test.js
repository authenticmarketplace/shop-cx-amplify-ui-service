import React from 'react';
import { Router, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DesktopSidebar from '../_components/DesktopSidebar.js';
import { testProducts } from '../mockProps/products.js';


describe('The Desktop Sidebar Component', () => {
    it('should show the circle logo and the VIP label', () => {
        const history = createMemoryHistory()
        render(<Router history={history}><DesktopSidebar hotitems={testProducts} /></Router>);

        const logo_image = screen.getByAltText('logo')
        const vip_label = screen.getByText('VIP')

        expect(logo_image).toBeInTheDocument()
        expect(vip_label).toBeInTheDocument()
    })
    
    it('should show 3 VIP products', () => {
        const history = createMemoryHistory()
        render(<Router history={history}><DesktopSidebar hotitems={testProducts} /></Router>);
        
        const hotproduct = screen.getAllByTestId('hotproduct')                
        const hotItemLink = screen.getAllByTestId('Hot Item Link')
        const hotItemImage = screen.getAllByAltText('Hot Item')
        expect(hotproduct).toHaveLength(3)
        expect(hotItemImage).toHaveLength(3)
        expect(hotItemLink).toHaveLength(3)
    })

    it('should show clickable links for specified view options', () => {
        const history = createMemoryHistory()
        render(<Router history={history}><DesktopSidebar hotitems={testProducts} /></Router>);
        
        const newReleaseButton = screen.getByText('New Releases')
        const recentlyViewedButton = screen.getByText('Recently Viewed')
        const favoriteBrandsButton = screen.getByText('Favorite Brands')
        expect(newReleaseButton).toBeInTheDocument()
        expect(recentlyViewedButton).toBeInTheDocument()
        expect(favoriteBrandsButton).toBeInTheDocument()
    })
});

