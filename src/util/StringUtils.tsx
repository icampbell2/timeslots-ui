class StringUtils {

    public static isBlank(value: string): boolean {
        if (value == null) {
            return true;
        }
        return value.trim() === '';
    }
}

export default StringUtils;