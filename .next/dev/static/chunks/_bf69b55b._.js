(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "googleProvider",
    ()=>googleProvider,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyDDcfMDHJihtSOWtR0_5tvOcfrHM4meKVg",
    authDomain: "fleetguard-afd56.firebaseapp.com",
    projectId: "fleetguard-afd56",
    storageBucket: "fleetguard-afd56.firebasestorage.app",
    messagingSenderId: "183217584134",
    appId: "1:183217584134:web:7948017495c3969d4deb87",
    measurementId: "G-030H14JYX1"
};
// Initialize Firebase
let app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
const googleProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/vehicle/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VehicleInspectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Initialize Gemini - API key from environment variable
const GEMINI_API_KEY = ("TURBOPACK compile-time value", "AIzaSyCaF7HW0rCBzac7BOosXPSIQxO2UFmHgoM");
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp"
});
function VehicleInspectionPage({ params }) {
    _s();
    const { id: vehicleId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const vehicleName = searchParams.get("name");
    const vehiclePlate = searchParams.get("plate");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingStep, setLoadingStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Form State
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        vehicleId: vehicleId,
        vehicleName: vehicleName || "",
        licensePlate: vehiclePlate || "",
        sounds: {
            unusualEngineSound: false,
            soundTypes: [],
            brakingSound: {
                exists: false,
                description: ""
            },
            turningSound: {
                exists: false,
                description: ""
            }
        },
        vibrations: {
            steeringWheelVibration: false,
            highSpeedShaking: false,
            brakingVibration: false
        },
        smells: {
            burningSmell: false,
            fuelSmell: false,
            rottenEggSmell: false,
            coolantSmell: false
        },
        leaks: {
            oilSpots: false,
            coolantLeak: false,
            waterFromAC: false,
            brakeFluidLeak: false
        },
        drivingBehavior: {
            reducedPower: false,
            pulling: {
                exists: false,
                direction: ""
            },
            gearShiftingDifficulty: false,
            engineStalling: false,
            hardSteering: false,
            overheating: false
        },
        dashboardWarnings: {
            checkEngineLight: false,
            absLight: false,
            oilPressureLight: false,
            batteryLight: false,
            temperatureWarning: false,
            tpmsWarning: false
        },
        tyresBrakes: {
            unevenTyreWear: false,
            lowPressureOften: false,
            squeakyBrakes: false,
            brakePedalFeel: "normal"
        },
        electricalIssues: {
            dimHeadlights: false,
            acNotCooling: false,
            slowPowerWindows: false,
            batteryDyingOften: false,
            slowStart: false
        },
        fluidsCondition: {
            lowEngineOil: false,
            blackOilColor: false,
            lowCoolant: false,
            lowBrakeFluid: false
        },
        serviceHistory: {
            lastServiceDate: "",
            lastOilChange: "",
            lastBrakePadChange: "",
            lastTyreChange: "",
            lastBatteryChange: ""
        },
        evSpecific: {
            isEV: false,
            rangeDroppingFast: false,
            chargingSlow: false,
            batteryHeating: false,
            inverterNoise: false
        }
    });
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        exterior: [],
        problemAreas: [],
        documents: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VehicleInspectionPage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "VehicleInspectionPage.useEffect.unsubscribe": (currentUser)=>{
                    if (!currentUser) {
                        router.push("/login");
                    } else {
                        setUser(currentUser);
                    }
                }
            }["VehicleInspectionPage.useEffect.unsubscribe"]);
            return ({
                "VehicleInspectionPage.useEffect": ()=>unsubscribe()
            })["VehicleInspectionPage.useEffect"];
        }
    }["VehicleInspectionPage.useEffect"], [
        router
    ]);
    const updateState = (section, field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
    };
    const toggleArrayItem = (section, field, item)=>{
        setFormData((prev)=>{
            const currentArray = prev[section][field] || [];
            const newArray = currentArray.includes(item) ? currentArray.filter((i)=>i !== item) : [
                ...currentArray,
                item
            ];
            return {
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: newArray
                }
            };
        });
    };
    const handleFileChange = (category, e)=>{
        if (e.target.files) {
            setFiles((prev)=>({
                    ...prev,
                    [category]: Array.from(e.target.files)
                }));
        }
    };
    const uploadPhotosToStorage = async (vehicleId)=>{
        const uploadedUrls = {
            exterior: [],
            problemAreas: [],
            documents: []
        };
        const uploadFile = async (file, path)=>{
            const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], path);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef, file);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef);
        };
        for (const file of files.exterior){
            const url = await uploadFile(file, `vehicles/${vehicleId}/exterior/${Date.now()}_${file.name}`);
            uploadedUrls.exterior.push(url);
        }
        for (const file of files.problemAreas){
            const url = await uploadFile(file, `vehicles/${vehicleId}/problems/${Date.now()}_${file.name}`);
            uploadedUrls.problemAreas.push(url);
        }
        for (const file of files.documents){
            const url = await uploadFile(file, `vehicles/${vehicleId}/documents/${Date.now()}_${file.name}`);
            uploadedUrls.documents.push(url);
        }
        return uploadedUrls;
    };
    const analyzeVehicleWithGemini = async (completeData)=>{
        const prompt = `
      You are an expert automotive diagnostic AI assistant. Analyze the following vehicle inspection data and provide a comprehensive diagnostic report.

      VEHICLE INFORMATION:
      - Vehicle: ${completeData.vehicleName}
      - License Plate: ${completeData.licensePlate}

      INSPECTION DATA:
      ${JSON.stringify(completeData, null, 2)}

      ANALYZE AND PROVIDE:
      1. CRITICAL ISSUES (Immediate attention required - safety concerns)
      2. UPCOMING MAINTENANCE (Attention needed soon - not urgent)
      3. ROUTINE/PREVENTIVE MAINTENANCE (Future planning)
      4. SYSTEM HEALTH BREAKDOWN (Engine, Brakes, Electrical, Fluids, Steering, EV)
      5. OVERALL VEHICLE HEALTH SCORE (0-100)
      6. COST SUMMARY (Immediate, Upcoming, Future in INR)
      7. AI INSIGHTS & RECOMMENDATIONS
      8. PRIORITY RANKING

      RESPONSE FORMAT:
      Return ONLY valid JSON with this structure:
      {
        "overallHealthScore": number,
        "vehicleSummary": "string",
        "criticalIssues": [{ "title": string, "severity": "CRITICAL"|"URGENT", "description": string, "reasoning": string, "estimatedCost": { "min": number, "max": number, "currency": "INR" }, "timeline": string, "affectedComponents": [string], "priority": number }],
        "upcomingMaintenance": [...],
        "routineMaintenance": [...],
        "systemHealth": {
          "engine": { "score": number, "status": string, "issues": [string], "recommendations": [string] },
          "brakes": { ... },
          "electrical": { ... },
          "fluids": { ... },
          "steering": { ... },
          "ev": { ... }
        },
        "costSummary": { "immediate": { "min": number, "max": number }, "upcoming": { "min": number, "max": number }, "future": { "min": number, "max": number }, "total": { "min": number, "max": number } },
        "aiInsights": [{ "type": string, "title": string, "description": string }],
        "priorityRanking": [{ "rank": number, "issueTitle": string, "category": string }]
      }
    `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const cleanedText = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
        return JSON.parse(cleanedText);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            setLoadingStep("Uploading photos...");
            const photoUrls = await uploadPhotosToStorage(vehicleId);
            const completeData = {
                ...formData,
                photos: photoUrls,
                submittedAt: new Date().toISOString(),
                userId: user.uid
            };
            setLoadingStep("AI analyzing vehicle data...");
            const analysisResult = await analyzeVehicleWithGemini(completeData);
            setLoadingStep("Saving report...");
            const inspectionRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "inspections"), {
                userId: user.uid,
                vehicleId: vehicleId,
                formData: completeData,
                analysis: analysisResult,
                photos: photoUrls,
                submittedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                analyzedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                status: "completed",
                vehicleName: formData.vehicleName,
                licensePlate: formData.licensePlate
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "vehicles", vehicleId), {
                lastInspection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                lastInspectionId: inspectionRef.id,
                lastHealthScore: analysisResult.overallHealthScore
            });
            router.push(`/analysis/${inspectionRef.id}`);
        } catch (error) {
            console.error("Error submitting inspection:", error);
            // Check for rate limit error (429)
            if (error.message?.includes("429") || error.message?.includes("quota") || error.message?.includes("rate")) {
                alert("⚠️ API Rate Limit Exceeded\n\nThe AI analysis service is temporarily unavailable due to high usage. Please try again in a few minutes.\n\nIf this persists, consider:\n1. Waiting 1-2 minutes before retrying\n2. Checking your Gemini API quota at ai.google.dev");
            } else {
                alert("An error occurred: " + error.message);
            }
        } finally{
            setLoading(false);
            setLoadingStep("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "vehicle-inspection-page theme-logistics",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "left-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overlay"
                        }, void 0, false, {
                            fileName: "[project]/app/vehicle/[id]/page.js",
                            lineNumber: 321,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand-mark",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-truck-fast"
                                }, void 0, false, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 323,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "FLEETGUARD"
                                }, void 0, false, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 324,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vehicle/[id]/page.js",
                            lineNumber: 322,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vehicle-preview",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animation-container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "country-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sun"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 329,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grass"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 330,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "street",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "car",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "car-body",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "car-top-back",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "back-curve"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                                        lineNumber: 335,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 334,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "car-gate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 337,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "car-top-front",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "wind-sheild"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                                        lineNumber: 339,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 338,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bonet-front"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 341,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "stepney"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 342,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 333,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "boundary-tyre-cover",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "boundary-tyre-cover-back-bottom"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 345,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "boundary-tyre-cover-inner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 346,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tyre-cover-front",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "boundary-tyre-cover-inner-front"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 349,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 348,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "base-axcel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 351,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "front-bumper"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 352,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tyre",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "gap"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 354,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 353,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tyre front",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "gap"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 357,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 356,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "car-shadow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 359,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 332,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 331,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "street-stripe"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 362,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hill"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 363,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                        lineNumber: 328,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 327,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "preview-details asymmetric-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Logistics Fleet Support"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 368,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Vehicle: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: vehicleName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 370,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 369,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Plate: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: vehiclePlate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 373,
                                                    columnNumber: 16
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 372,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Status: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "status-badge",
                                                    children: "OnDuty"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 375,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 367,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vehicle/[id]/page.js",
                            lineNumber: 326,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "decorative-line"
                        }, void 0, false, {
                            fileName: "[project]/app/vehicle/[id]/page.js",
                            lineNumber: 380,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/vehicle/[id]/page.js",
                    lineNumber: 320,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "right-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "form-header glass-effect",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Vehicle Inspection"
                                }, void 0, false, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 386,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Complete the comprehensive diagnostic checklist."
                                }, void 0, false, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 387,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vehicle/[id]/page.js",
                            lineNumber: 385,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "logistics-form",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-volume-high section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 394,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Sound Analysis"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 395,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 393,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toggle-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Any unusual engine sound?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 398,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "toggle-switch",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: formData.sounds.unusualEngineSound,
                                                            onChange: (e)=>updateState("sounds", "unusualEngineSound", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 400,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "slider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 411,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 399,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 397,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "checkbox-grid",
                                            children: [
                                                "knocking",
                                                "ticking",
                                                "rattling",
                                                "whining"
                                            ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "checkbox-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: `sound-${type}`,
                                                            checked: formData.sounds.soundTypes.includes(type),
                                                            onChange: ()=>toggleArrayItem("sounds", "soundTypes", type)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 417,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: `sound-${type}`,
                                                            children: type.charAt(0).toUpperCase() + type.slice(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 425,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, type, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 416,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 414,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-grid",
                                            style: {
                                                marginTop: "1.5rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.sounds.brakingSound.exists ? "yes" : "no",
                                                            onChange: (e)=>updateState("sounds", "brakingSound", {
                                                                    ...formData.sounds.brakingSound,
                                                                    exists: e.target.value === "yes"
                                                                }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "no",
                                                                    children: "No"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 442,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "yes",
                                                                    children: "Yes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 443,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 433,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Sound while braking?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 445,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 432,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.sounds.turningSound.exists ? "yes" : "no",
                                                            onChange: (e)=>updateState("sounds", "turningSound", {
                                                                    ...formData.sounds.turningSound,
                                                                    exists: e.target.value === "yes"
                                                                }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "no",
                                                                    children: "No"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 457,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "yes",
                                                                    children: "Yes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 458,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 448,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Sound while turning?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 460,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 447,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 431,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 392,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-wave-square section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 468,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Vibrations"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 469,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 467,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toggle-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Steering wheel vibration?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 472,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "toggle-switch",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: formData.vibrations.steeringWheelVibration,
                                                            onChange: (e)=>updateState("vibrations", "steeringWheelVibration", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 474,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "slider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 485,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 473,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 471,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toggle-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Car shaking at high speed?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 489,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "toggle-switch",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: formData.vibrations.highSpeedShaking,
                                                            onChange: (e)=>updateState("vibrations", "highSpeedShaking", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 491,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "slider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 502,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 490,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 488,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toggle-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Vibration when braking?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 506,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "toggle-switch",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: formData.vibrations.brakingVibration,
                                                            onChange: (e)=>updateState("vibrations", "brakingVibration", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 508,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "slider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 519,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 507,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 505,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 466,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-wind section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 527,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Smells"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 528,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 526,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "checkbox-grid",
                                            children: [
                                                {
                                                    key: "burningSmell",
                                                    label: "Burning smell"
                                                },
                                                {
                                                    key: "fuelSmell",
                                                    label: "Fuel smell"
                                                },
                                                {
                                                    key: "rottenEggSmell",
                                                    label: "Rotten egg smell"
                                                },
                                                {
                                                    key: "coolantSmell",
                                                    label: "Sweet coolant smell"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "checkbox-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: item.key,
                                                            checked: formData.smells[item.key],
                                                            onChange: (e)=>updateState("smells", item.key, e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 538,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: item.key,
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 546,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, item.key, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 537,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 530,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 525,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-droplet section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 555,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Leaks"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 556,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 554,
                                            columnNumber: 8
                                        }, this),
                                        [
                                            {
                                                key: "oilSpots",
                                                label: "Oil spots under car"
                                            },
                                            {
                                                key: "coolantLeak",
                                                label: "Coolant (green/pink)"
                                            },
                                            {
                                                key: "waterFromAC",
                                                label: "Water (AC normal)"
                                            },
                                            {
                                                key: "brakeFluidLeak",
                                                label: "Brake fluid leaks"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "toggle-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 565,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "toggle-switch",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: formData.leaks[item.key],
                                                                onChange: (e)=>updateState("leaks", item.key, e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 567,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "slider"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 574,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 566,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 564,
                                                columnNumber: 9
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 553,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-gamepad section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 583,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Driving Behavior"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 584,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 582,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "checkbox-grid",
                                            children: [
                                                {
                                                    key: "reducedPower",
                                                    label: "Reduced pickup/power"
                                                },
                                                {
                                                    key: "gearShiftingDifficulty",
                                                    label: "Gear shifting difficulty"
                                                },
                                                {
                                                    key: "engineStalling",
                                                    label: "Engine stalling"
                                                },
                                                {
                                                    key: "hardSteering",
                                                    label: "Hard steering"
                                                },
                                                {
                                                    key: "overheating",
                                                    label: "Car overheating"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "checkbox-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: item.key,
                                                            checked: formData.drivingBehavior[item.key],
                                                            onChange: (e)=>updateState("drivingBehavior", item.key, e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 598,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: item.key,
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 610,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, item.key, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 597,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 586,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-group",
                                            style: {
                                                marginTop: "1rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.drivingBehavior.pulling.direction || "",
                                                    onChange: (e)=>updateState("drivingBehavior", "pulling", {
                                                            exists: !!e.target.value,
                                                            direction: e.target.value
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "None"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 624,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "left",
                                                            children: "Left"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 625,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "right",
                                                            children: "Right"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 626,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 615,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Car pulling left/right"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 628,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 614,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 581,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-gauge-high section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 635,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Dashboard & Warnings"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 636,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 634,
                                            columnNumber: 8
                                        }, this),
                                        [
                                            {
                                                key: "checkEngineLight",
                                                label: "Check engine light"
                                            },
                                            {
                                                key: "absLight",
                                                label: "ABS light"
                                            },
                                            {
                                                key: "oilPressureLight",
                                                label: "Oil pressure light"
                                            },
                                            {
                                                key: "batteryLight",
                                                label: "Battery light"
                                            },
                                            {
                                                key: "temperatureWarning",
                                                label: "Temperature warning"
                                            },
                                            {
                                                key: "tpmsWarning",
                                                label: "TPMS (Tyre pressure)"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "status-indicator-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 647,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: `status-btn ${formData.dashboardWarnings[item.key] ? "active" : ""}`,
                                                        onClick: ()=>updateState("dashboardWarnings", item.key, !formData.dashboardWarnings[item.key]),
                                                        children: formData.dashboardWarnings[item.key] ? "ON" : "OFF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 648,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 646,
                                                columnNumber: 9
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 633,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-circle-notch section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 670,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Tyres & Brakes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 671,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 669,
                                            columnNumber: 8
                                        }, this),
                                        [
                                            {
                                                key: "unevenTyreWear",
                                                label: "Uneven tyre wear"
                                            },
                                            {
                                                key: "lowPressureOften",
                                                label: "Low tyre pressure often"
                                            },
                                            {
                                                key: "squeakyBrakes",
                                                label: "Squeaky brakes"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "toggle-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 679,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "toggle-switch",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: formData.tyresBrakes[item.key],
                                                                onChange: (e)=>updateState("tyresBrakes", item.key, e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 681,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "slider"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 688,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 680,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 678,
                                                columnNumber: 9
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-group",
                                            style: {
                                                marginTop: "1rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.tyresBrakes.brakePedalFeel,
                                                    onChange: (e)=>updateState("tyresBrakes", "brakePedalFeel", e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "normal",
                                                            children: "Normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 699,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "soft",
                                                            children: "Too Soft"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 700,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "hard",
                                                            children: "Too Hard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 701,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 693,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Brake pedal feel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 703,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 692,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 668,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-plug section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 710,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Electrical Issues"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 711,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 709,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "checkbox-grid",
                                            children: [
                                                {
                                                    key: "dimHeadlights",
                                                    label: "Dim headlights"
                                                },
                                                {
                                                    key: "acNotCooling",
                                                    label: "AC not cooling well"
                                                },
                                                {
                                                    key: "slowPowerWindows",
                                                    label: "Power windows slow"
                                                },
                                                {
                                                    key: "batteryDyingOften",
                                                    label: "Battery dying often"
                                                },
                                                {
                                                    key: "slowStart",
                                                    label: "Car taking too long to start"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "checkbox-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: item.key,
                                                            checked: formData.electricalIssues[item.key],
                                                            onChange: (e)=>updateState("electricalIssues", item.key, e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 722,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: item.key,
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 734,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, item.key, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 721,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 713,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 708,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-oil-can section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 743,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Fluids Condition"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 744,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 742,
                                            columnNumber: 8
                                        }, this),
                                        [
                                            {
                                                key: "lowEngineOil",
                                                label: "Engine oil level low"
                                            },
                                            {
                                                key: "blackOilColor",
                                                label: "Oil colour very black"
                                            },
                                            {
                                                key: "lowCoolant",
                                                label: "Coolant level low"
                                            },
                                            {
                                                key: "lowBrakeFluid",
                                                label: "Brake fluid low"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "toggle-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 753,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "toggle-switch",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: formData.fluidsCondition[item.key],
                                                                onChange: (e)=>updateState("fluidsCondition", item.key, e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 755,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "slider"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                                lineNumber: 766,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 754,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/app/vehicle/[id]/page.js",
                                                lineNumber: 752,
                                                columnNumber: 9
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 741,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-calendar-days section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 775,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Service History"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 776,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 774,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-grid",
                                            children: [
                                                {
                                                    key: "lastServiceDate",
                                                    label: "Last service date"
                                                },
                                                {
                                                    key: "lastOilChange",
                                                    label: "Last oil change"
                                                },
                                                {
                                                    key: "lastBrakePadChange",
                                                    label: "Last brake pad change"
                                                },
                                                {
                                                    key: "lastTyreChange",
                                                    label: "Last tyre change"
                                                },
                                                {
                                                    key: "lastBatteryChange",
                                                    label: "Last battery change"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: formData.serviceHistory[item.key],
                                                            onChange: (e)=>updateState("serviceHistory", item.key, e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 787,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 794,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, item.key, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 786,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 778,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 773,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-bolt section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 803,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Electric Vehicles (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 804,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 802,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toggle-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Is this an EV?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 807,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "toggle-switch",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: formData.evSpecific.isEV,
                                                            onChange: (e)=>updateState("evSpecific", "isEV", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 809,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "slider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 816,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 808,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 806,
                                            columnNumber: 8
                                        }, this),
                                        formData.evSpecific.isEV && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                {
                                                    key: "rangeDroppingFast",
                                                    label: "Range dropping fast"
                                                },
                                                {
                                                    key: "chargingSlow",
                                                    label: "Charging slow"
                                                },
                                                {
                                                    key: "batteryHeating",
                                                    label: "Battery heating"
                                                },
                                                {
                                                    key: "inverterNoise",
                                                    label: "Strange inverter/motor noise"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "toggle-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 831,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "toggle-switch",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.evSpecific[item.key],
                                                                    onChange: (e)=>updateState("evSpecific", item.key, e.target.checked)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 833,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "slider"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                                    lineNumber: 844,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 832,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, item.key, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 830,
                                                    columnNumber: 11
                                                }, this))
                                        }, void 0, false)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 801,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-camera section-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 855,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Photos & Documents"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 856,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 854,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            multiple: true,
                                                            accept: "image/*",
                                                            onChange: (e)=>handleFileChange("exterior", e)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 860,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                position: "static",
                                                                marginBottom: "0.5rem",
                                                                display: "block"
                                                            },
                                                            children: "Exterior Photos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 866,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 859,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            multiple: true,
                                                            accept: "image/*",
                                                            onChange: (e)=>handleFileChange("problemAreas", e)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 877,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                position: "static",
                                                                marginBottom: "0.5rem",
                                                                display: "block"
                                                            },
                                                            children: "Problem Areas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 883,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 876,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            multiple: true,
                                                            accept: ".pdf,image/*",
                                                            onChange: (e)=>handleFileChange("documents", e)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 894,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                position: "static",
                                                                marginBottom: "0.5rem",
                                                                display: "block"
                                                            },
                                                            children: "Service Documents"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                                            lineNumber: 900,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                                    lineNumber: 893,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 858,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 853,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn btn-secondary",
                                            children: "Save Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 914,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "btn btn-primary",
                                            disabled: loading,
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-spinner fa-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 924,
                                                        columnNumber: 11
                                                    }, this),
                                                    " ",
                                                    loadingStep || "Processing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Submit Report ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-check"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vehicle/[id]/page.js",
                                                        lineNumber: 929,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/app/vehicle/[id]/page.js",
                                            lineNumber: 917,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vehicle/[id]/page.js",
                                    lineNumber: 913,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vehicle/[id]/page.js",
                            lineNumber: 390,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/vehicle/[id]/page.js",
                    lineNumber: 384,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/vehicle/[id]/page.js",
            lineNumber: 318,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/vehicle/[id]/page.js",
        lineNumber: 317,
        columnNumber: 3
    }, this);
}
_s(VehicleInspectionPage, "vn0/FS7YCh40qbGnV5s2gRJkui8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VehicleInspectionPage;
var _c;
__turbopack_context__.k.register(_c, "VehicleInspectionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_bf69b55b._.js.map