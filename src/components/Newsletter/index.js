import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import * as F from "../Flexbox"
import * as S from "./styles"

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email)
    console.log('result', result);
  }

  const handleChange = (e, type) => {
    type === 'email' ? setEmail(e.target.value) : setPhone(e.target.value)
  }

  return (
    <S.NewsWrapper>
      <F.Container>
        <F.FlexGrid>
          <S.NewsCol width="34%">
            <S.P>
              Conecte e fique por dentro do cuidado de Deus e do “cuidar” de
              gente:
            </S.P>
          </S.NewsCol>
          <S.NewsCol width="66%">
            <S.Form onSubmit={handleSubmit}>
              <S.Input type="email" value={email} onChange={(e) => handleChange(e, 'email')} placeholder="Digite o seu email"></S.Input>
              <S.Input type="tel" value={phone} onChange={(e) => handleChange(e, 'phone')} placeholder="Whatsapp"></S.Input>
              <S.Input type="submit" value="Enviar"></S.Input>
            </S.Form>
          </S.NewsCol>
        </F.FlexGrid>
      </F.Container>
    </S.NewsWrapper>
  )
}

export default Newsletter
