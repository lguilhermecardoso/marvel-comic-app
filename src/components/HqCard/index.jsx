import * as Styled from "./styles"


import { MdRemoveRedEye } from "react-icons/md"

import { useUHQSelectedContext } from '../../contexts/HQSelectedContext'

export function HqCard ({
  comic,
  onOpenHqDetailsModal
}) {
  let thumnail = ''
  if (comic.thumbnail?.path && comic.thumbnail?.extension) {
    thumnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
  }

  const { isSelected, handleSelectedHQ } = useUHQSelectedContext()

  function handleSelectHQ() {
    handleSelectedHQ({
      id: comic.id,
      title: comic.title,
      thumnail,
      details: comic.description ? comic.description : ''
    })
  }

  return (
    <Styled.Container>
      <Styled.Wrap >
        <Styled.Card
          selected={isSelected(comic.id)}
        >
          <div className="title">
            <div
              className="header"
              onClick={handleSelectHQ}
            >
              <img
                className="backGroundCover"
                src={thumnail}
                alt={comic.title}
              />
            </div>
            <div className="content">
              <div
                className="content-text"
              >
                <h2
                  className="title-text"
                  title={comic.series?.name ? comic.series.name : 'No Series name available'}
                >
                  {comic.series?.name ? comic.series.name : 'No Series name available'}
                </h2>
                <h3
                  className="subtitle-text"
                  title={comic.title}
                >
                  {comic.title}
                </h3>
              </div>
              
            </div>
            <div
              className="card-footer"
            >
              <button
                type="button"
                className="btn btn-sm btn-light"
                onClick={onOpenHqDetailsModal}
              >
                <MdRemoveRedEye
                  size={17}
                  title="Ver Detalhe"
                /> Ver detalhe
              </button>
            </div>
          </div>
        </Styled.Card>
      </Styled.Wrap>
    </Styled.Container>
  )
} 