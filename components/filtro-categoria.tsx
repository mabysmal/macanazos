"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

type ItemContent = {
  title: string;
  smdescription: string;
  thumbnail: string;
  price: string;
  fullPath: string;
  tags: string[];
};

type FilteredProductGridProps = {
  items: ItemContent[];
  type: 'productos' | 'paquetes';
};

const TagFilter: React.FC<{ tags: string[], selectedTag: string, onSelectTag: (tag: string) => void }> = 
  ({ tags, selectedTag, onSelectTag }) => (
  <div className="mb-4">
    <select 
      value={selectedTag} 
      onChange={(e) => onSelectTag(e.target.value)}
      className="bg-orange text-white p-2 rounded"
    >
      <option value="all">Todas las categorías</option>
      {tags.map(tag => (
        <option key={tag} value={tag}>{tag}</option>
      ))}
    </select>
  </div>
);

function getURL(fullPath: string): string {
  return fullPath.split('/').pop()?.split('.').shift() ?? '';
}

const FilteredProductGrid: React.FC<FilteredProductGridProps> = ({ items, type }) => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [filteredItems, setFilteredItems] = useState(items);

  const tags = Array.from(new Set(items.flatMap(item => item.tags)));

  useEffect(() => {
    if (selectedTag === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.tags.includes(selectedTag)));
    }
  }, [selectedTag, items]);

  return (
    <>
      <TagFilter tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      <div className="bg-blue py-8 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div className="bg-blue border-2 border-orange rounded-lg shadow-md overflow-hidden flex flex-col h-full" key={getURL(item.fullPath)}>
            <a href={`/${type}/${getURL(item.fullPath)}`} className="flex flex-col h-full">
              <div className="flex-1 flex justify-center items-center p-4">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={256}
                  height={256}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="texto-cards text-white p-4">
                <h2 className="text-4xl font-semibold mb-4">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{item.smdescription}</p>
                <span className="text-2xl font-bold mb-4 text-blue-600 text-center">{item.price}.00 MXN</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilteredProductGrid;