











// same date 21-10


// const authMiddleware = require("../middleware/authMiddleware");

// router.get("/my-invoices/export", authMiddleware, async (req, res) => {
//   try {
//     const invoices = await Invoice.find({ uploadedBy: req.user._id }); // only user's invoices

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Invoices");

//     worksheet.columns = [
//       { header: "Invoice ID", key: "_id", width: 25 },
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Invoice Date", key: "invoiceDate", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Total Amount", key: "totalAmount", width: 15 },
//       { header: "Tax Amount", key: "taxAmount", width: 15 },
//       { header: "Items", key: "items", width: 50 },
//       { header: "Image Path", key: "imagePath", width: 40 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         _id: inv._id.toString(),
//         invoiceNumber: inv.invoiceNumber,
//         invoiceDate: inv.invoiceDate?.toISOString().split("T")[0] || "",
//         vendorName: inv.vendorName,
//         totalAmount: inv.totalAmount,
//         taxAmount: inv.taxAmount,
//         items: JSON.stringify(inv.items),
//         imagePath: inv.imagePath,
//         createdAt: inv.createdAt?.toISOString().split("T")[0] || "",
//       });
//     });

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=my-invoices.xlsx"
//     );

//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to export invoices" });
//   }
// });











// Lastly date 21-10
//sundays working code

// const express = require("express");
// const router = express.Router();
// const ExcelJS = require("exceljs");
// const Invoice = require("../models/Invoice");
// const authMiddleware = require("../middleware/authMiddleware");

// // 📤 Export all invoices (admin)
// router.get("/invoices/export", async (req, res) => {
//   try {
//     const invoices = await Invoice.find();

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Invoices");

//     worksheet.columns = [
//       { header: "Invoice ID", key: "_id", width: 25 },
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Invoice Date", key: "invoiceDate", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Total Amount", key: "totalAmount", width: 15 },
//       { header: "Tax Amount", key: "taxAmount", width: 15 },
//       { header: "Items", key: "items", width: 50 },
//       { header: "Uploaded By", key: "uploadedBy", width: 25 },
//       { header: "UploadedByName", key: "uploadedByName", width: 25 },
//       { header: "Image Path", key: "imagePath", width: 40 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         _id: inv._id.toString(),
//         invoiceNumber: inv.invoiceNumber,
//         invoiceDate: inv.invoiceDate?.toISOString().split("T")[0] || "",
//         vendorName: inv.vendorName,
//         totalAmount: inv.totalAmount,
//         taxAmount: inv.taxAmount,
//         items: JSON.stringify(inv.items),
//         uploadedBy: inv.uploadedBy?.toString() || "",
//         uploadedByName: inv.uploadedByName || "",
//         imagePath: inv.imagePath,
//         createdAt: inv.createdAt?.toISOString().split("T")[0] || "",
//       });
//     });

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=invoices.xlsx"
//     );

//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (error) {
//     console.error("Error exporting invoices:", error);
//     res.status(500).json({ error: "Failed to export invoices" });
//   }
// });

// // 📤 Export invoices of logged-in user
// router.get("/my-invoices/export", authMiddleware, async (req, res) => {
//   try {
//     const invoices = await Invoice.find({ uploadedBy: req.user._id });

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Invoices");

//     worksheet.columns = [
//       { header: "Invoice ID", key: "_id", width: 25 },
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Invoice Date", key: "invoiceDate", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Total Amount", key: "totalAmount", width: 15 },
//       { header: "Tax Amount", key: "taxAmount", width: 15 },
//       { header: "Items", key: "items", width: 50 },
//       { header: "UploadedByName", key: "uploadedByName", width: 25 },
//       { header: "Uploaded By ID", key: "uploadedBy", width: 25 },
//       { header: "Image Path", key: "imagePath", width: 40 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         _id: inv._id.toString(),
//         invoiceNumber: inv.invoiceNumber,
//         invoiceDate: inv.invoiceDate?.toISOString().split("T")[0] || "",
//         vendorName: inv.vendorName,
//         totalAmount: inv.totalAmount,
//         taxAmount: inv.taxAmount,
//         items: JSON.stringify(inv.items),
//         imagePath: inv.imagePath,
//          uploadedBy: inv.uploadedBy?.toString() || "",
//         uploadedByName: inv.uploadedByName || "",
//         createdAt: inv.createdAt?.toISOString().split("T")[0] || "",

//       });
//     });

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=my-invoices.xlsx"
//     );

//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (err) {
//     console.error("Error exporting my invoices:", err);
//     res.status(500).json({ message: "Failed to export invoices" });
//   }
// });




// // Get all invoices for the logged-in user
// router.get("/my-invoices", authMiddleware, async (req, res) => {
//   try {
//     const invoices = await Invoice.find({ uploadedBy: req.user.id });
//     res.json(invoices);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch invoices" });
//   }
// });






// module.exports = router;








//above code is sundays working code





//these chnages for the deleted button logic

// const express = require("express");
// const router = express.Router();
// const ExcelJS = require("exceljs");
// const Invoice = require("../models/Invoice");
// const authMiddleware = require("../middleware/authMiddleware");

// // 📤 Export all active invoices (admin)
// router.get("/invoices/export", authMiddleware, async (req, res) => {
//   try {
//     if (req.user.role !== "admin") {
//       return res.status(403).json({ error: "Access denied" });
//     }

//     const invoices = await Invoice.find({ isDeleted: false })
//       .populate("uploadedBy", "email businessName");

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Active Invoices");

//     worksheet.columns = [
//       { header: "Invoice ID", key: "_id", width: 25 },
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Invoice Date", key: "invoiceDate", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Total Amount", key: "totalAmount", width: 15 },
//       { header: "Tax Amount", key: "taxAmount", width: 15 },
//       { header: "Uploaded By (Business)", key: "uploadedBy", width: 30 },
//       { header: "Uploaded By Name", key: "uploadedByName", width: 25 },
//       { header: "Image Path", key: "imagePath", width: 40 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         _id: inv._id.toString(),
//         invoiceNumber: inv.invoiceNumber,
//         invoiceDate: inv.invoiceDate?.toISOString().split("T")[0] || "",
//         vendorName: inv.vendorName,
//         totalAmount: inv.totalAmount,
//         taxAmount: inv.taxAmount,
//         uploadedBy: inv.uploadedBy?.businessName || inv.uploadedBy?.email || "",
//         uploadedByName: inv.uploadedByName || "",
//         imagePath: inv.imagePath,
//         createdAt: inv.createdAt?.toISOString().split("T")[0] || "",
//       });
//     });

//     res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
//     res.setHeader("Content-Disposition", "attachment; filename=invoices_active.xlsx");
//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (error) {
//     console.error("Error exporting invoices:", error);
//     res.status(500).json({ error: "Failed to export invoices" });
//   }
// });

// // 📤 Export only deleted invoices (admin only)
// router.get("/invoices/export-deleted", authMiddleware, async (req, res) => {
//   try {
//     if (req.user.role !== "admin") {
//       return res.status(403).json({ error: "Access denied" });
//     }

//     const invoices = await Invoice.find({ isDeleted: true })
//       .populate("uploadedBy", "email businessName");

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Deleted Invoices");

//     worksheet.columns = [
//       { header: "Invoice ID", key: "_id", width: 25 },
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Deleted?", key: "isDeleted", width: 10 },
//       { header: "Uploaded By (Business)", key: "uploadedBy", width: 30 },
//       { header: "Uploaded By Name", key: "uploadedByName", width: 25 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         _id: inv._id.toString(),
//         invoiceNumber: inv.invoiceNumber,
//         vendorName: inv.vendorName,
//         isDeleted: inv.isDeleted ? "Yes" : "No",
//         uploadedBy: inv.uploadedBy?.businessName || inv.uploadedBy?.email || "",
//         uploadedByName: inv.uploadedByName || "",
//         createdAt: inv.createdAt?.toISOString().split("T")[0] || "",
//       });
//     });

//     res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
//     res.setHeader("Content-Disposition", "attachment; filename=invoices_deleted.xlsx");
//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (err) {
//     console.error("Error exporting deleted invoices:", err);
//     res.status(500).json({ message: "Failed to export deleted invoices" });
//   }
// });

// // 📤 Export user's active invoices
// router.get("/my-invoices/export", authMiddleware, async (req, res) => {
//   try {
//     const invoices = await Invoice.find({ uploadedBy: req.user._id, isDeleted: false });

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("My Active Invoices");

//     worksheet.columns = [
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Total Amount", key: "totalAmount", width: 15 },
//       { header: "Tax Amount", key: "taxAmount", width: 15 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         invoiceNumber: inv.invoiceNumber,
//         vendorName: inv.vendorName,
//         totalAmount: inv.totalAmount,
//         taxAmount: inv.taxAmount,
//         createdAt: inv.createdAt?.toISOString().split("T")[0] || "",
//       });
//     });

//     res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
//     res.setHeader("Content-Disposition", "attachment; filename=my_invoices_active.xlsx");
//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (err) {
//     console.error("Error exporting my invoices:", err);
//     res.status(500).json({ message: "Failed to export invoices" });
//   }
// });

// module.exports = router;








// sec code for deleted botton logic

// const express = require("express");
// const router = express.Router();
// const ExcelJS = require("exceljs");
// const Invoice = require("../models/Invoice");
// const User = require("../models/Users");
// const authMiddleware = require("../middleware/authMiddleware");

// // 📤 Export invoices (Admin + Normal Users)
// router.get("/invoices/export", authMiddleware, async (req, res) => {
//   try {
//     const { type } = req.query; // ?type=deleted or ?type=active (default)
//     const isDeleted = type === "deleted"; // boolean
//     const user = req.user;

//     let invoices = [];

//     // =============== 🔹 ADMIN LOGIC ===============
//     if (user.role === "admin") {
//       // include sub-users too
//       const subUsers = await User.find({ parentBusinessId: user.id });
//       const subUserIds = subUsers.map((u) => u._id);

//       invoices = await Invoice.find({
//         uploadedBy: { $in: [...subUserIds, user.id] },
//         isDeleted: isDeleted,
//       }).populate("uploadedBy", "email businessName");
//     }

//     // =============== 🔹 NORMAL USER LOGIC ===============
//     else {
//       invoices = await Invoice.find({
//         uploadedBy: user.id,
//         isDeleted: false,
//       });
//     }

//     // 🧾 Create workbook
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet(
//       isDeleted ? "Deleted Invoices" : "Active Invoices"
//     );

//     // 🧱 Define columns
//     worksheet.columns = [
//       { header: "Invoice ID", key: "_id", width: 25 },
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Invoice Date", key: "invoiceDate", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Total Amount", key: "totalAmount", width: 15 },
//       { header: "Tax Amount", key: "taxAmount", width: 15 },
//       { header: "Status", key: "status", width: 15 },
//       { header: "Uploaded By (Business)", key: "uploadedBy", width: 30 },
//       { header: "Uploaded By Name", key: "uploadedByName", width: 25 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     // 🧩 Add rows
//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         _id: inv._id.toString(),
//         invoiceNumber: inv.invoiceNumber || "",
//         invoiceDate: inv.invoiceDate
//           ? inv.invoiceDate.toISOString().split("T")[0]
//           : "",
//         vendorName: inv.vendorName || "",
//         totalAmount: inv.totalAmount || 0,
//         taxAmount: inv.taxAmount || 0,
//         status: inv.isDeleted ? "Deleted" : "Active",
//         uploadedBy:
//           inv.uploadedBy?.businessName || inv.uploadedBy?.email || "N/A",
//         uploadedByName: inv.uploadedByName || "",
//         createdAt: inv.createdAt
//           ? inv.createdAt.toISOString().split("T")[0]
//           : "",
//       });
//     });

//     // 🧾 Set headers
//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename=invoices_${isDeleted ? "deleted" : "active"}.xlsx`
//     );

//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (error) {
//     console.error("❌ Error exporting invoices:", error);
//     res.status(500).json({ error: "Failed to export invoices" });
//   }
// });

// module.exports = router;




// third sec for dlt botton

// const express = require("express");
// const router = express.Router();
// const ExcelJS = require("exceljs");
// const Invoice = require("../models/Invoice");
// const User = require("../models/Users");
// const authMiddleware = require("../middleware/authMiddleware");




// // 📤 Export invoices (Admin + Normal Users)
// router.get("/invoices/export", authMiddleware, async (req, res) => {
//   try {
//     const { type } = req.query; // ?type=deleted or ?type=active (default)
//     const isDeleted = type === "deleted";
//     const user = req.user;

//     let invoices = [];

//     // =============== 🔹 ADMIN LOGIC ===============
//     if (user.role === "admin") {
//       const subUsers = await User.find({ parentBusinessId: user.id });
//       const subUserIds = subUsers.map((u) => u._id);

//       invoices = await Invoice.find({
//         uploadedBy: { $in: [...subUserIds, user.id] },
//         isDeleted: isDeleted,
//       }).populate("uploadedBy", "email businessName");
//     }

//     // =============== 🔹 NORMAL USER LOGIC (FIXED) ===============
//     else {
//       invoices = await Invoice.find({
//         uploadedBy: user.id,
//         $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }], // ✅ export old + active invoices
//       });
//     }





//     // 🧾 Create workbook
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet(
//       isDeleted ? "Deleted Invoices" : "Active Invoices"
//     );

//     // 🧱 Define columns
//     worksheet.columns = [
//       { header: "Invoice ID", key: "_id", width: 25 },
//       { header: "Invoice Number", key: "invoiceNumber", width: 20 },
//       { header: "Invoice Date", key: "invoiceDate", width: 20 },
//       { header: "Vendor Name", key: "vendorName", width: 25 },
//       { header: "Total Amount", key: "totalAmount", width: 15 },
//       { header: "Tax Amount", key: "taxAmount", width: 15 },
//       { header: "Status", key: "status", width: 15 },
//       { header: "Uploaded By (Business)", key: "uploadedBy", width: 30 },
//       { header: "Uploaded By Name", key: "uploadedByName", width: 25 },
//       { header: "Created At", key: "createdAt", width: 25 },
//     ];

//     // 🧩 Add rows
//     invoices.forEach((inv) => {
//       worksheet.addRow({
//         _id: inv._id.toString(),
//         invoiceNumber: inv.invoiceNumber || "",
//         invoiceDate: inv.invoiceDate
//           ? inv.invoiceDate.toISOString().split("T")[0]
//           : "",
//         vendorName: inv.vendorName || "",
//         totalAmount: inv.totalAmount || 0,
//         taxAmount: inv.taxAmount || 0,
//         status: inv.isDeleted ? "Deleted" : "Active",
//         uploadedBy:
//           inv.uploadedBy?.businessName || inv.uploadedBy?.email || "N/A",
//         uploadedByName: inv.uploadedByName || "",
//         createdAt: inv.createdAt
//           ? inv.createdAt.toISOString().split("T")[0]
//           : "",
//       });
//     });

//     // 🧾 Set headers
//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename=invoices_${isDeleted ? "deleted" : "active"}.xlsx`
//     );

//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (error) {
//     console.error("❌ Error exporting invoices:", error);
//     res.status(500).json({ error: "Failed to export invoices" });
//   }
// });

// module.exports = router;






//last change for dlt botton in sha allah

const express = require("express");
const router = express.Router();
const ExcelJS = require("exceljs");
const Invoice = require("../models/Invoice");
const User = require("../models/Users");
const authMiddleware = require("../middleware/authMiddleware");

/* =========================================================
   📦 ADMIN EXPORT — All Invoices
   ========================================================= */
router.get("/invoices/export", authMiddleware, async (req, res) => {
  try {
    const { type } = req.query; // ?type=deleted or ?type=active (default)
    const isDeleted = type === "deleted";
    const user = req.user;

    let invoices = [];

    // =============== 🔹 ADMIN LOGIC ===============
    if (user.role === "admin") {
      const subUsers = await User.find({ parentBusinessId: user.id });
      const subUserIds = subUsers.map((u) => u._id);

      invoices = await Invoice.find({
        uploadedBy: { $in: [...subUserIds, user.id] },
        isDeleted: isDeleted,
      }).populate("uploadedBy", "email businessName");
    } else {
      // fallback so normal users don't break this route
      invoices = await Invoice.find({
        uploadedBy: user.id,
        $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }],
      });
    }

    // 🧾 Create workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(
      isDeleted ? "Deleted Invoices" : "Active Invoices"
    );

    worksheet.columns = [
      { header: "Invoice ID", key: "_id", width: 25 },
      { header: "Invoice Number", key: "invoiceNumber", width: 20 },
      { header: "Invoice Date", key: "invoiceDate", width: 20 },
      { header: "Vendor Name", key: "vendorName", width: 25 },
      { header: "Total Amount", key: "totalAmount", width: 15 },
      { header: "Tax Amount", key: "taxAmount", width: 15 },
      { header: "Status", key: "status", width: 15 },
      { header: "Uploaded By (Business)", key: "uploadedBy", width: 30 },
      { header: "Uploaded By Name", key: "uploadedByName", width: 25 },
      { header: "Created At", key: "createdAt", width: 25 },
    ];

    invoices.forEach((inv) => {
      worksheet.addRow({
        _id: inv._id.toString(),
        invoiceNumber: inv.invoiceNumber || "",
        invoiceDate: inv.invoiceDate
          ? inv.invoiceDate.toISOString().split("T")[0]
          : "",
        vendorName: inv.vendorName || "",
        totalAmount: inv.totalAmount || 0,
        taxAmount: inv.taxAmount || 0,
        status: inv.isDeleted ? "Deleted" : "Active",
        uploadedBy:
          inv.uploadedBy?.businessName || inv.uploadedBy?.email || "N/A",
        uploadedByName: inv.uploadedByName || "",
        createdAt: inv.createdAt
          ? inv.createdAt.toISOString().split("T")[0]
          : "",
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=invoices_${isDeleted ? "deleted" : "active"}.xlsx`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("❌ Error exporting invoices:", error);
    res.status(500).json({ error: "Failed to export invoices" });
  }
});

/* =========================================================
   👤 USER EXPORT — Only their active invoices
   ========================================================= */
router.get("/my-invoices/export", authMiddleware, async (req, res) => {
  try {
    const user = req.user;

    // ✅ Fetch only active or old invoices (no isDeleted field)
    const invoices = await Invoice.find({
      uploadedBy: user.id,
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }],
    }).sort({ createdAt: -1 });

    if (!invoices || invoices.length === 0) {
      return res.status(404).json({ message: "No active invoices found" });
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("My Invoices");

    worksheet.columns = [
      { header: "Invoice ID", key: "_id", width: 25 },
      { header: "Invoice Number", key: "invoiceNumber", width: 20 },
      { header: "Invoice Date", key: "invoiceDate", width: 20 },
      { header: "Vendor Name", key: "vendorName", width: 25 },
      { header: "Total Amount", key: "totalAmount", width: 15 },
      { header: "Tax Amount", key: "taxAmount", width: 15 },
      { header: "Status", key: "status", width: 15 },
      { header: "Created At", key: "createdAt", width: 25 },
    ];

    invoices.forEach((inv) => {
      worksheet.addRow({
        _id: inv._id.toString(),
        invoiceNumber: inv.invoiceNumber || "",
        invoiceDate: inv.invoiceDate
          ? inv.invoiceDate.toISOString().split("T")[0]
          : "",
        vendorName: inv.vendorName || "",
        totalAmount: inv.totalAmount || 0,
        taxAmount: inv.taxAmount || 0,
        status: inv.isDeleted ? "Deleted" : "Active",
        createdAt: inv.createdAt
          ? inv.createdAt.toISOString().split("T")[0]
          : "",
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=my_invoices.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("❌ Error exporting my invoices:", error);
    res.status(500).json({ error: "Failed to export my invoices" });
  }
});

module.exports = router;
