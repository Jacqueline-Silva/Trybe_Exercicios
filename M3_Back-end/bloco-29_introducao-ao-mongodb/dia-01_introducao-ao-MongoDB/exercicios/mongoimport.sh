## Dentro do diretório em que está o arquivo, copiar o json
docker cp books.json d6b44:/tmp/books.json

## Em seguida
docker exec d6b44 mongoimport -d book -c books --file /tmp/books.json

## Retorno esperado:
## 431 document(s) imported successfully. 0 document(s) failed to import.