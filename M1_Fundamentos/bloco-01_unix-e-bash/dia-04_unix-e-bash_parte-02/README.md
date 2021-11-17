# DIA 04

##### Tópicos deste dia:

[X] Comando **_find_**
[X] Operadores **_>_**, **_>>_** e **_|_** no terminal
[X] Permissões de arquivos e diretórios
[X] Verificar status e enviar sinais a processos Unix


##### Exercícios do dia:

_Parte 01 - Comandos input e output:_

1. Navegue até a pasta "unix_tests".

2. Crie um arquivo texto pelo terminal com o nome "skills2.txt" e adicione os valores Internet, Unix e Bash, um em cada linha.

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 

4. Conte quantas linhas tem o arquivo "skills2.txt".

5. Crie um arquivo chamado "top_skills.txt" usando o "skills2.txt", contendo as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado "phrases2.txt" pelo terminal e adicione algumas frases de sua escolha.

7. Conte o número de linhas que contêm as letras "br".

8. Conte o número de linhas que não contêm as letras "br".

9. Adicione dois nomes de países ao final do arquivo "phrases2.txt".

10. Crie um novo arquivo chamado "bunch_of_things.txt" com os conteúdos dos arquivos "phrases2.txt" e "countries.txt".

11. Ordene o arquivo "bunch_of_things.txt".


_Parte 02 - Permissões:_

1. Navegue até "unix_tests".

2. Rode o comando ls -l e veja quais as permissões dos arquivos;

3. Mude a permissão do arquivo "bunch_of_things.txt" para que todos os usuários possam ter acesso a leitura e escrita, e verifique se está correto com o comando _ls -l_

4. Tire a permissão de escrita do arquivo "bunch_of_things.txt" para todos os usuários e verifique se está correto com o comando _ls -l_.

5. Volte à permissão do arquivo "bunch_of_things.txt" para a listada inicialmente usando o comando _chmod 644 bunch_of_things.txt_.


_Parte 03 - Processos e Jobs:_

1. Liste todos os processos.

2. Agora use o comando _sleep 30&_.

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando _sleep 30_ e termine a sua execução.

4. Execute novamento o comando _sleep 30_, mas agora sem o _&_. Depois, faça com que ele continue executando em background.

5. Crie um processo em background que rode o comando _sleep_ por 300 segundos.

6. Crie mais dois processos que rodem o comanddo _sleep_ por 200 e 100 segundo, respectivamente.

7. Verifique que apenas o processo _sleep 300_ está em execução com o comando _jobs_. Suspenda a execução desse processo.

8. Retome a execução do processo _sleep 100_ em background com o comando _bg_.

9. Termine a execução de todos os processos _sleep_.
