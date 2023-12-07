// import React from 'react'
// function Example(props) {
//   const [showDialog, setShowDialog] = React.useState(false);
//   const cancelRef = React.useRef();
//   const open = () => setShowDialog(true);
//   const close = () => setShowDialog(false);
//  // https://reach.tech/alert-dialog/
//   return (
//     <div>
//       <button onClick={open}>Delete something</button>

//       {showDialog && (
//         <AlertDialog leastDestructiveRef={cancelRef}>
//           <AlertDialogLabel>Please Confirm!</AlertDialogLabel>

//           <AlertDialogDescription>
//             Are you sure you want to delete something? This action is permanent,
//             and we're totally not just flipping a field called "deleted" to
//             "true" in our database, we're actually deleting something.
//           </AlertDialogDescription>

//           <div className="alert-buttons">
//             <button onClick={close}>Yes, delete</button>{" "}
//             <button ref={cancelRef} onClick={close}>
//               Nevermind, don't delete.
//             </button>
//           </div>
//         </AlertDialog>
//       )}
//     </div>
//   );
// }