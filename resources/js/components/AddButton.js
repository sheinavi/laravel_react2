import PropTypes from 'prop-types'

export const AddButton = ({ text, onClick }) => {

  return (
    <button onClick={onClick} className="btn btn-primary">{text}</button>
  )

}

AddButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}
