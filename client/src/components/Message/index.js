import { useState, useEffect } from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';

export default function Message({ message }) {
  // on peut avoir un composant avec un state local
  const [visible, setVisible] = useState(false);

  // on veut mettre en place un timer
  // qui passera visible a false
  // Timer = effet de bord => useEffect
  useEffect(() => {
    setVisible(true);

    // avec les timeouts ou les intervals
    // on peut avoiir un problème de lancement
    // en parallèle. 2 timeout peuvet courir en même temps
    // celui qui arrivera au bout du compteur exécutera la fonction
    // et le Message s'efface avant les 3s

    // on stocke l'id du timeout en cours
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // avec useEffect on peut retourner une fonction de nettoyage
    // ici on va supprimer les listeners, timers ou requêtes qu'on aura mis en place
    // => componentWillUnmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);

  if (!visible) {
    return null;
  }

  return (
    <MessageSUI content={message} />
  );
}