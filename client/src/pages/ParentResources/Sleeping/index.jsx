import React from 'react';
import "./sleeping.css";
import { NavBar } from '../../../components/Navbar'

class Sleeping extends React.Component {
    render() {
        return (
            <div>
<<<<<<< HEAD:client/src/pages/ParentResources/Sleeping/index.jsx
                <Navigations />
=======
                <NavBar />
>>>>>>> c06b41f3b39b2202b11c9772903e26f5f9358d01:client/src/pages/EatingandSleepingCharts/Sleeping/index.jsx
                <table>
                    <thead>
                        <tr>
                            <th>Age in Months</th>
                            <br></br>
                            <br></br>
                            <th>Total Hours of Sleep</th>                     <br></br>
                            <th>Total Hours of Nighttime Sleep</th>
                            <br></br>
                            <th>Total Hours of Daytime Sleep</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="months">1</td>
                            <br></br>
                            <br></br>
                            <td>16</td>
                            <br></br>
                            <br></br>
                            <td>8-9</td>
                            <br></br>
                            <br></br>
                            <td>7-8</td>
                        </tr>

                        <tr>
                            <td className="months">2</td>
                            <br></br>
                            <br></br>
                            <td>12</td>
                            <br></br>
                            <br></br>
                            <td>8-9</td>
                            <br></br>
                            <br></br>
                            <td>7-8</td>
                        </tr>

                        <tr>
                            <td className="months">3</td>
                            <br></br>
                            <br></br>
                            <td>15</td>
                            <br></br>
                            <br></br>
                            <td>9-10</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>

                        <tr>
                            <td className="months">4</td>
                            <br></br>
                            <br></br>
                            <td>15</td>
                            <br></br>
                            <br></br>
                            <td>9-10</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>

                        <tr>
                            <td className="months">5</td>
                            <br></br>
                            <br></br>
                            <td>15</td>
                            <br></br>
                            <br></br>
                            <td>9-10</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>

                        <tr colSpan="2">
                            <td className="months">6</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10</td>
                            <br></br>
                            <br></br>
                            <td>4</td>
                        </tr>

                        <tr>
                            <td className="months">7</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10</td>
                            <br></br>
                            <br></br>
                            <td>4</td>
                        </tr>

                        <tr>
                            <td className="months">8</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10-11</td>
                            <br></br>
                            <br></br>
                            <td>4-3</td>
                        </tr>

                        <tr>
                            <td className="months">9</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10-11</td>
                            <br></br>
                            <br></br>
                            <td>4-3</td>
                        </tr>

                        <tr>
                            <td className="months">10</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>11</td>
                            <br></br>
                            <br></br>
                            <td>3</td>
                        </tr>

                        <tr>
                            <td className="months">11</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>11</td>
                            <br></br>
                            <br></br>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td className="months">12</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>11</td>
                            <br></br>
                            <br></br>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                    <div className="footer-copyright-pr">
                        <h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sleeping;