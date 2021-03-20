import { Container,
  ModalTitle,
  ModalSubTitle,
  ModalResumeHq
} from "./styles";
import Modal from "react-modal"

import { MdHighlightOff } from "react-icons/md"

export function HqDetailsModal(
  {
    comic,
    isOpen,
    onRequestClose
  }) 
{
  if (!comic) return

  let thumnail = ''
  if (comic.thumbnail?.path && comic.thumbnail?.extension) {
    thumnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
  }
  const description = comic.description
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <MdHighlightOff 
          size={32}
          className="close_button"
          onClick={onRequestClose}
        />
        <div
          className="modal_content"
        >
          <img
            className="backGroundCover"
            src={thumnail ? thumnail : 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'}
            alt={comic.title ? comic.title : '' }
          />
          <div>
            <ModalTitle>{comic.title ? comic.title : 'No Title available' }</ModalTitle>
            <ModalSubTitle>{comic.series?.name ? comic.series.name : 'No Series name available'}</ModalSubTitle>
          </div>
        </div>
        <ModalResumeHq>
          <div dangerouslySetInnerHTML={ {__html: description ? description : 'No description available'} } />
        </ModalResumeHq>
      </Container>
    </Modal>
  )
}