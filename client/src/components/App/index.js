import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import './style.scss';

import Header from 'src/components/Header';
// ici on vient trier les données retournées par l'API de Github
// on vient mapper/faire correspondre ces données avec ce qu'on a besoin
// dans nos composants
const getMappedData = (items) => (items.map((item) => ({
    id: item.id,
    imageUrl: item.owner.avatar_url,
    title: item.full_name,
    subtitle: item.owner.login,
    description: item.description || 'No description',
  })));
  
  // == Composant
  export default function App() {
    // on place dans le state les data des repos
    // quand on fera notre requête ces données seront changées => nouveau rendu de React
    const [results, setResults] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
  
    const loadData = () => {
      setLoading(true);
  
      // cete fois-ci la requête prendra en compte "query" et "page" du state
      axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page}&per_page=9`)
        .then((response) => {
          // on vient créer un nouveau tableau avec les anciens repos en 1e
          // et on place les nouveaux en 2e position
          const newData = [
            ...results,
            ...response.data.items,
          ];
          // ici on stocke les données pour le state results
          setResults(newData);
          setTotalCount(response.data.total_count);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    };
  
    // avec useEffect on peut exécuter une fonction
    // au 1e rendu du composant et à chaque fois que
    // la valeur de la dépendence change
    useEffect(() => {
      if (query !== '') {
        loadData();
      }
    // on peut avoir plusieurs dépendences dans le tableau
    // si query et/ou page change le callback est appelé
    }, [query, page]);
  
    const setSearchQuery = (value) => {
      // si la nouvelle valeur est la même
      // que la valeur de query alors on ne fait rien
      if (value === query) {
        return;
      }
  
      // on remet le numéro de page à 1
      setPage(1);
      // on remet à zéro le tableau de results
      setResults([]);
      // on set la valeur pour la nouvelle recherche
      setQuery(value);
    };
  
    // on prépare la condition pour afficher le bouton LoadMore
    // totalCount supérieur à 9 résultats
    // ne pas être en état de loading
    // le tableau de results doit avoir une longueur inférieure au totalCount
    const showLoadMore = totalCount > 9 && !loading && results.length < totalCount;
  
    return (
      <div className="app">
            <Header />
        </div>
    )
}