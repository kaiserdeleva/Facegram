
function Navigation() {
    return ( 
      <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Facegram</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Post
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Photo</a>
          <a class="dropdown-item" href="#">Video</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Live</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="What's on your mind?" aria-label="Search" />
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
          </div>
      </nav>
  </div>
    )
}

function MyProfile() {
  return(
    <div class="container">
        <img src="mypic.jpeg"/>
      <h3>Kaiser Gabrielle S. de Leva</h3>
      <div class="profile-stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
      </div>
      <p><u>View Profile</u></p>
  <tr><th>21</th><th>206</th><th>236</th></tr>
  <tr><td>🌍Post</td><td>👀New Stories</td><td>✅Active now</td></tr>

  <tr><th>3</th><th>6</th><th>4</th></tr>
  <tr><td>💌Messages</td><td>🎉Birthday today</td><td>💭Memories</td></tr>
    </div>
  )
}

function Post(props){
  return(
    <div class="container2">
      <h5 class="name">{props.name}</h5>
      <h7 class="status">{props.status}</h7>
      <h6 class="date">{props.date} <i class="fal fa-globe-asia"></i></h6><br/>
      <img class="post-img" src={props.post} />
      <h6>
        <span class="like badge badge-primary">Like</span>
            <span class="comment badge badge-primary">Comment</span>
                <span class="share badge badge-primary">Share</span>
      </h6>
    </div>
  )
}
var destination = document.getElementById('app');

ReactDOM.render(
<div class="container-fluid">
  <Navigation/>
   <MyProfile/>
  <Post
  name="Lil Wayne"
  status="updated his profile picture."
  date="3 days ago."
  post="male.png"
  />

    <Post
    name="Danielle Steel"
    status="is at ZooBic Safari."
    date="2 days ago"
    post="female.png"
    />

        <Post
        name="Bruce Springsteen"
        status="is playing with his new tiger."
        date="1 day ago"
        post="male.png"
        />

            <Post
            name="Karl Marx"
            status="is dead."
            date="23 hours ago"
            post="male.png"
            />


                <Post
                name="Morgan Freeman"
                status="is practicing his new voice at his new music room."
                date="22 hours ago"
                post="male.png"
                />
 
                    <Post
                    name="Serena Williams"
                    status="is practicing tennis at Miami Florida."
                    date="21 hours ago"
                    post="female.png"
                    />

                        <Post
                        name="Tiger Woods"
                        status="is at Manila Phillipines."
                        date="19 hours ago"
                        post="male.png"
                        />

                            <Post
                            name="Manny 'Pacman' Pacquiao"
                            status="is feeling sick."
                            date="5 hours ago"
                            post="male.png"
                            />

                                <Post
                                name="Rodrigo Duterte"
                                status="is at Malacanang Palace."
                                date="4 hours ago"
                                post="male.png"
                                />

                                    <Post
                                    name="Chito Miranda"
                                    status="is eating coconut."
                                    date="3 hours ago"
                                    post="male.png"
                                    />

                                        <Post
                                        name="Teri Hatcher"
                                        status="is waving at you."
                                        date="2 hours ago"
                                        post="female.png"
                                        />

                                            <Post
                                            name="Jennifer Love Hewitt"
                                            status="is watching Netflix."
                                            date="1 hour ago"
                                            post="female.png"
                                            />
                               
                                                <Post
                                                name="Mila Kunis"
                                                status="updated her profile picture."
                                                date="30 minutes ago"
                                                post="female.png"
                                                />

                                                    <Post
                                                    name="Jackie Chan"
                                                    status="is feeling bored at China."
                                                    date="27 minutes ago"
                                                    post="male.png"
                                                    />

                                                        <Post
                                                        name="Robert Pattinson"
                                                        status="is suffering covid19."
                                                        date="22 minutes ago"
                                                        post="male.png"
                                                        />

  
</div>,
  destination
);
    