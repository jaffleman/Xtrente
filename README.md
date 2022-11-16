# Xtrente
Code une fonction qui détermine s'il existe, dans un tableau, 3 entiers dont le produit fait 30.
Ce-ci est une question test à laquelle j'ai dû répondre lors d'un entretien technique.
Les possibilités sont multiples (2*3*5, 1*3*10, 1*2*15, 6*5*1)

Angle d'attaque:
je recupere dans un tableau tout les nombre entier diviseur de 30 (1,2,3,5,6,10,15 et 30)
SI mon tableau contient moins de 3 éléments je retourne FALSE
TANT qu'il y 3 éléments dans le tableau OU que l'on a pas retourner true
    Je récupère le premier élément du tableau en le suppriment du tableau
    Je récupère l'élément suivant du tableau sans le supprimer du tableau
    Je multiplie les deux nombres
    SI le résultat de la multiplication est plus petit ou égale a 30
        Je récupère l'élément suivant du tableau
            Je le multiplie avec le résultat du précédent produit
            SI c'est égale à 30
                Je retourne true
            SINON je passe à l'élément suivant
    SINON je passe a l'élément suivant
        
    

 
La fonction est testée avec jest.