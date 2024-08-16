export function searchByTitle(query, dataArray=[]) {
    // Convert the query to lowercase for case-insensitive search
    const lowerQuery = query.toLowerCase();
    // Filter the dataArray based on the title matching the query
    if(query.length !== "" ){
        const searchResults = dataArray.filter(item =>
            item.title.toLowerCase().includes(lowerQuery)
        );
        
        return searchResults;        
    }else{
        return [];
    }

}

export function searchByName(query, dataArray=[]) {
    // Convert the query to lowercase for case-insensitive search
    const lowerQuery = query.toLowerCase();
    
    if(query.length > 0 ){
        // Filter the dataArray based on the title matching the query
        const searchResults = dataArray.filter(item =>
            (item.firstName+item.lastName).toLowerCase().includes(lowerQuery)
        );
        
        return searchResults;
    }else{
        return [];
    }
}
export function filterBySet(query, dataArray=[]) {
    // Convert the query to lowercase for case-insensitive search
    const lowerQuery = query.toLowerCase();
    
    // Filter the dataArray based on the title matching the query
    const searchResults = dataArray.filter(item =>
        item.set == query
    );
    
    return searchResults;
}

export function filterByStatus(query, dataArray=[]) {
    // Convert the query to lowercase for case-insensitive search
    const lowerQuery = query.toLowerCase();
    
    // Filter the dataArray based on the title matching the query
    const searchResults = dataArray.filter(item =>
        item.status == query
    );
    
    return searchResults;
}