



export const GifItem = ({title,url,id}) => {

  return (
        <div className="card">

            <img width="150" height="200" src={url} alt={title} />
            <h4>{title}</h4>

        </div>
    )
}
