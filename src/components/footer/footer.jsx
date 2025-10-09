import { useNavigate } from "react-router";
import logo from "../../image/crop.jpg";
import "./footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-div">
        <div className="logo-footer">
          <img src= {logo} alt="Azalea_By_Ramya" />
          <p>
            Specializes in providing high-quality, stylish productsfor your
            wardrobe
          </p>
        </div>
        <div className="contacts">
          <div className="companies">
            <h3>COMPANY</h3>
            <p onClick={() => navigate("/")}>About</p>
            <p onClick={() => navigate("/")}>Terms of Use</p>
            <p onClick={() => navigate("/")}>Policies</p>
          </div>

          <div className="socials">
            <h3>CONTACTS </h3>
            <a
              href="https://www.instagram.com/azalea_by_ramya/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram"></i> Instagram
            </a>
            <a 
            href="ramyaazalea@gmail.com"
            target="blank"
            rel="noreferrer"
            >
              <i class="fa-regular fa-envelope"></i> ramyaazalea@gmail.com
            </a>
            <a href="">91+| 8807242903</a>
            <br />
          </div>
        </div>
      </div>
      <hr />
      <p>
        Copyright <i class="fa-regular fa-copyright"></i>2025 Azalea_By_Ramya. All rights
        reserved.
      </p>
    </footer>
  );
};