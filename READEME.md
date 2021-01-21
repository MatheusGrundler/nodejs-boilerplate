# EXEMPLO DE COMO FAZER LEVANTAMENTO DE REQUIITOS

# Recuperação de senha

**RF**

- O usuário deve poder recuparar sua senha informado o seu e-mail;
- O usuário deve poder receber um e-mail com instrução de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mail deve aconteccer em segundo plano(background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao restar a sua senha
