import React from "react"

import { Container,
  Content,
  ContainerHeader,
  Header,
  InformationApp
} from "./styles"
import Logo from '../../assets/logo.svg'
import { HqCard } from "../HqCard"
import { HqDetailsModal } from '../HqDetailsModal'

import api from '../../services/api';
import KeyMarvel from '../../services/keymarvel'
import { Loading } from "../Loading"
import { FormModal } from "../FormModal"

import { useUHQSelectedContext } from '../../contexts/HQSelectedContext'

export function Home () {

  const [isHqDetailsModalOpen, setisHqDetailsModalOpen] = React.useState(false)
  const [isFormModalOpen, setFormModalOpen] = React.useState(false)
  const [comics, setComics] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [comic, setComic] = React.useState([])
  const [offset, setOffset] = React.useState(0)
  const [selectedHq, setSelectedHq] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("");

  const { getSelectedHqs } = useUHQSelectedContext()

  React.useEffect(() => {
    setSelectedHq(getSelectedHqs())
  }, [getSelectedHqs])

  React.useEffect(() => {
    setLoading(true)
    async function load() {
      const param = {
        params: {
          ...{ limit: 20, offset },
          ...KeyMarvel.getApiParams(),
        },
      };

      const result = await api.get('/comics', param)

       const data = result.data.data.results.map(comic => ({
        ...comic,
      }))
      setComics(comics => comics.concat(data))
      setLoading(false)
    }

    load();
  }, [offset])

  const loadMore = React.useCallback(() => {
    let newOffset = offset + 20

    setOffset(newOffset)
  }, [offset])

  function handleOpenHqDetailsModal(comic) {
    setComic(comic)
    setisHqDetailsModalOpen(true)
  }

  function handleCloseHqDetailsModal() {
    setisHqDetailsModalOpen(false)
  }

  function handleOpenFormModal() {
    setFormModalOpen(true)
  }

  function handleCloseFormModal() {
    setFormModalOpen(false)
  }

  const handleChange = e => {
    setSearchTerm(e.target.value.toLowerCase());
  }

  React.useEffect(() => {
    if (!searchTerm) {
      setComics([])
      setOffset(0)
      loadMore()
    }
    const filterComic = comics.filter(comic => 
      comic.title.toLowerCase().includes(searchTerm)
    )
    
    setComics(filterComic)
  }, [searchTerm])
  return (
    <>
    <Container>
      <ContainerHeader>
        <Header>
          <img src={Logo} alt="mcapp"/>
          <input
            type="text"
            disabled={loading}
            placeholder="Buscar quadrinhos"
            value={searchTerm}
            onChange={handleChange}
          />
        </Header>
      </ContainerHeader>
      <Content>
        <InformationApp>
          <h1>Listagem de quadrinhos!</h1>
          <h2>Selecione os quadrinhos que deseja enviar por email!</h2>
          <p>Para ter mais informações dos quadrinhos clique em <strong>ver detalhes</strong></p>
        </InformationApp>
        <main>
          {comics.map((comic, index) => (
              <HqCard
                key={`${comic.id}-${comic.title}-${index}`}
                comic={comic}
                onOpenHqDetailsModal={() => handleOpenHqDetailsModal(comic)}
              />
          ))}
        </main>
        {loading && <Loading />}
        <footer>
          <button
            style={{marginRight: '1rem'}}
            type="button"
            className="btn btn-primary"
            onClick={() => loadMore()}
          >
            Carregar mais
          </button>
          <button
            disabled={selectedHq.length <= 0}
            type="button"
            onClick={() => handleOpenFormModal()}
            className="btn btn-secondary"
          >
            Enviar por email
          </button>
        </footer>
      </Content>
    </Container>
    <HqDetailsModal 
      isOpen={isHqDetailsModalOpen}
      comic={comic}
      onRequestClose={handleCloseHqDetailsModal}
    />
    <FormModal 
      isOpen={isFormModalOpen}
      onRequestClose={handleCloseFormModal}
    />
  </> 
  )
}