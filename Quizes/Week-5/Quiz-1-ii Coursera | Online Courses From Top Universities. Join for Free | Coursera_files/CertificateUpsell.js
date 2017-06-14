define("bundles/quiz-summative/components/CertificateUpsell",["require","exports","module","react","./CertificatePrice","js/lib/imgix","i18n!nls/quiz-summative","pages/open-course/common/constants","pages/open-course/common/models/itemMetadata"],function(require,exports,module){"use strict";function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),t=0;t<a.length;t++){var r=a[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var r,n,e=require("react"),a=require("./CertificatePrice"),c=require("js/lib/imgix"),t=require("i18n!nls/quiz-summative"),o=require("pages/open-course/common/constants"),s=require("pages/open-course/common/models/itemMetadata"),i=(n=r=function(r){function CertificateUpsell(){return _classCallCheck(this,CertificateUpsell),_possibleConstructorReturn(this,r.apply(this,arguments))}return _inherits(CertificateUpsell,r),CertificateUpsell.prototype.render=function render(){var r=this.props.itemMetadata,n=c.processImage(o.vcLandingLearnerPhoto,{height:68});return e.createElement("div",{className:"c-exam-vc-upsell"},e.createElement("div",{className:"bt3-row"},e.createElement("div",{className:"bt3-col-md-12"},e.createElement("p",null,e.createElement("strong",null,t("Be Recognized for Your Achievements.")),e.createElement("img",{src:n,className:"bt3-pull-left c-exam-vc-upsell-learner-image"}),t('\n                "Course Certificates give you the recognition you need to get the job, the material gives you\n                the skills to do the job. It makes you look more valuable because you are more valuable."\n                - Peter B., USA, Software Developer\n              ')),e.createElement("div",{className:"bt3-text-right"},e.createElement("a",{href:o.vcLandingPagePath},e.createElement("strong",null,e.createElement("span",null,t("Showcase Your Accomplishment! Earn Your Course Certificate!"))," ",e.createElement("span",null,e.createElement(a,{courseId:r.get("course.id")})),e.createElement("span",{className:"c-exam-vc-upsell-caret"},"  ",e.createElement("i",{className:"cif-chevron-right"}))))))))},CertificateUpsell}(e.Component),r.propTypes={itemMetadata:e.PropTypes.instanceOf(s).isRequired},n);module.exports=i});