// this approch is only use for begginers to understand what we have to in program

// import { useState } from "react";
// import "./review.css";

// const FeedbackSystem = () => {
//   const [up0, setUp0] = useState(0);
//   const [down0, setDown0] = useState(0);

//   const [up1, setUp1] = useState(0);
//   const [down1, setDown1] = useState(0);

//   const [up2, setUp2] = useState(0);
//   const [down2, setDown2] = useState(0);

//   const [up3, setUp3] = useState(0);
//   const [down3, setDown3] = useState(0);

//   const [up4, setUp4] = useState(0);
//   const [down4, setDown4] = useState(0);

//   return (
//     <div className="container">
//       <div className="cards">

//         {/* Readability */}
//         <div className="card">
//           <h2>Readability</h2>

//           <div className="buttons">
//             <button
//               className="upvote"
//               data-testid="upvote-btn-0"
//               onClick={() => setUp0(up0 + 1)}
//             >
//               👍 Upvote
//             </button>

//             <button
//               className="downvote"
//               data-testid="downvote-btn-0"
//               onClick={() => setDown0(down0 + 1)}
//             >
//               👎 Downvote
//             </button>
//           </div>

//           <p data-testid="upvote-count-0">
//             Upvotes: <strong>{up0}</strong>
//           </p>

//           <p data-testid="downvote-count-0">
//             Downvotes: <strong>{down0}</strong>
//           </p>
//         </div>

//         {/* Performance */}
//         <div className="card">
//           <h2>Performance</h2>

//           <div className="buttons">
//             <button
//               className="upvote"
//               data-testid="upvote-btn-1"
//               onClick={() => setUp1(up1 + 1)}
//             >
//               👍 Upvote
//             </button>

//             <button
//               className="downvote"
//               data-testid="downvote-btn-1"
//               onClick={() => setDown1(down1 + 1)}
//             >
//               👎 Downvote
//             </button>
//           </div>

//           <p data-testid="upvote-count-1">
//             Upvotes: <strong>{up1}</strong>
//           </p>

//           <p data-testid="downvote-count-1">
//             Downvotes: <strong>{down1}</strong>
//           </p>
//         </div>

//         {/* Security */}
//         <div className="card">
//           <h2>Security</h2>

//           <div className="buttons">
//             <button
//               className="upvote"
//               data-testid="upvote-btn-2"
//               onClick={() => setUp2(up2 + 1)}
//             >
//               👍 Upvote
//             </button>

//             <button
//               className="downvote"
//               data-testid="downvote-btn-2"
//               onClick={() => setDown2(down2 + 1)}
//             >
//               👎 Downvote
//             </button>
//           </div>

//           <p data-testid="upvote-count-2">
//             Upvotes: <strong>{up2}</strong>
//           </p>

//           <p data-testid="downvote-count-2">
//             Downvotes: <strong>{down2}</strong>
//           </p>
//         </div>

//         {/* Documentation */}
//         <div className="card">
//           <h2>Documentation</h2>

//           <div className="buttons">
//             <button
//               className="upvote"
//               data-testid="upvote-btn-3"
//               onClick={() => setUp3(up3 + 1)}
//             >
//               👍 Upvote
//             </button>

//             <button
//               className="downvote"
//               data-testid="downvote-btn-3"
//               onClick={() => setDown3(down3 + 1)}
//             >
//               👎 Downvote
//             </button>
//           </div>

//           <p data-testid="upvote-count-3">
//             Upvotes: <strong>{up3}</strong>
//           </p>

//           <p data-testid="downvote-count-3">
//             Downvotes: <strong>{down3}</strong>
//           </p>
//         </div>

//         {/* Testing */}
//         <div className="card">
//           <h2>Testing</h2>

//           <div className="buttons">
//             <button
//               className="upvote"
//               data-testid="upvote-btn-4"
//               onClick={() => setUp4(up4 + 1)}
//             >
//               👍 Upvote
//             </button>

//             <button
//               className="downvote"
//               data-testid="downvote-btn-4"
//               onClick={() => setDown4(down4 + 1)}
//             >
//               👎 Downvote
//             </button>
//           </div>

//           <p data-testid="upvote-count-4">
//             Upvotes: <strong>{up4}</strong>
//           </p>

//           <p data-testid="downvote-count-4">
//             Downvotes: <strong>{down4}</strong>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FeedbackSystem;